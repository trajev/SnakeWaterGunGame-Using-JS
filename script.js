computer = ['Snake', 'Water', 'Gun'];

choice = prompt("Enter S for Snake, W for Water, G for Gun: ");
if (choice == 'W' || choice == 'w') {
    choice = 'Water';
}
else if (choice == 'S' || choice == 's') {
    choice = 'Snake';
}
else if (choice == 'G' || choice == 'g') {
    choice == 'Gun';
}
else {
    alert("error");
}

i = Math.ceil(Math.random() * 3 )


if (choice == 'Water' && computer[i] == 'Snake') {
    alert("Computer Choice : Snake \n Computer Wins...");
}
else if (choice == 'Gun' && computer[i] == 'Water') {
    alert("Computer Choice : Water \n Computer Wins...");
}
else if (choice == 'Snake' && computer[i] == 'Gun') {
    alert("Computer Choice : Gun \n Computer Wins...");
}
else if (choice == 'Gun' && computer[i] == 'Snake') {
    alert("Computer Choice : Snake \n You Wins...");
}
else if (choice == 'Water' && computer[i] == 'Gun') {
    alert("Computer Choice : Gun \n You Wins...");
}
else if (choice == 'Snake' && computer[i] == 'Water') {
    alert("Computer Choice : Water \n You Wins...");
}
else {
    alert('Tie');
}


