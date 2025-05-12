const data = [
  {
    id: 'users',
    user1: { email: 'john@example.com', name: 'John Doe' },
    user2: { email: 'jane@example.com', name: 'Jane Smith' }
  }
];

const users = data[0];

// Loop through all keys in the object
for (const key in users) {
  if (key !== 'id') {
    const user = users[key];
    console.log(`${key}: ${user.name}, Email: ${user.email}`);
  }
}
