import os
from flask import Flask, render_template, request, session
from flask_socketio import SocketIO, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'otaku_secret_key_2026'
socketio = SocketIO(app, cors_allowed_origins="*")

# Base de données temporaire
rooms = {}

@app.route('/')
def index():
    return render_template('index.html')

# --- LOGIQUE TEMPS RÉEL ---

@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    
    if room not in rooms:
        rooms[room] = {'players': [], 'current_turn': 0, 'game_active': False}
    
    if username not in rooms[room]['players']:
        rooms[room]['players'].append(username)
    
    emit('update_players', {'players': rooms[room]['players']}, room=room)

@socketio.on('start_game')
def start_game(data):
    room = data['room']
    if room in rooms and len(rooms[room]['players']) >= 2:
        rooms[room]['game_active'] = True
        rooms[room]['current_turn'] = 0
        first_player = rooms[room]['players'][0]
        emit('game_started', {'current_player': first_player}, room=room)

@socketio.on('submit_action')
def handle_action(data):
    room = data['room']
    user = data['username']
    action = data['action']
    
    # On passe au joueur suivant sans limite de temps
    rooms[room]['current_turn'] = (rooms[room]['current_turn'] + 1) % len(rooms[room]['players'])
    next_player = rooms[room]['players'][rooms[room]['current_turn']]
    
    emit('new_move', {
        'player': user, 
        'action': action, 
        'next_player': next_player
    }, room=room)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)

