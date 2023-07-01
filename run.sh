# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Run backend and frontend in parallel
cd ..
npm start --prefix backend & npm start --prefix frontend
