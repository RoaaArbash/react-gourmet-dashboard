
import React, { useState } from 'react';
import MealCard from './MealCard';

function App() {
  // 1. Initial State Data
  const initialMeals = [
    { id: 'm1', name: 'Chicken Avocado Salad', calories: 350, price: 12 },
    { id: 'm2', name: 'Double Beef Burger', calories: 750, price: 18 },
    { id: 'm3', name: 'Healthy Oats Soup', calories: 210, price: 8 },
    { id: 'm4', name: 'Grilled Ribeye Steak', calories: 480, price: 25 },
  ];

  const [meals, setMeals] = useState(initialMeals);

  // 2. Filter Function (Diet: Less than 400 calories)
  const filterDiet = () => {
    const filtered = initialMeals.filter(meal => meal.calories < 400);
    setMeals(filtered);
  };

  // 3. Reset Function (Show All)
  const showAll = () => {
    setMeals(initialMeals);
  };

  // 4. Sort Function (Ascending by Price)
  const sortByPrice = () => {
    const sorted = [...meals].sort((a, b) => a.price - b.price);
    setMeals(sorted);
  };

  return (
    <div className="dashboard-container">
      {/* Embedded CSS Styles for a modern look */}
      <style>{`
        .dashboard-container {
          padding: 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          min-height: 100vh;
          max-width: 1200px;
          margin: 0 auto;
        }
        .dashboard-header {
          color: #2d3748;
          font-size: 2.5rem;
          margin-bottom: 5px;
        }
        .dashboard-subtitle {
          color: #718096;
          margin-bottom: 30px;
        }
        .button-group {
          margin-bottom: 40px;
          display: flex;
          gap: 12px;
        }
        .btn {
          padding: 12px 24px;
          font-size: 0.95rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .btn-all {
          background-color: #edf2f7;
          color: #4a5568;
        }
        .btn-all:hover { background-color: #e2e8f0; }
        
        .btn-diet {
          background-color: #48bb78;
          color: white;
        }
        .btn-diet:hover { background-color: #38a169; }
        
        .btn-sort {
          background-color: #4299e1;
          color: white;
        }
        .btn-sort:hover { background-color: #3182ce; }
        
        .meals-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
        }
        .meal-card {
          background-color: white;
          border-radius: 12px;
          padding: 24px;
          width: 240px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid #e2e8f0;
        }
        .meal-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        .meal-title {
          margin: 0 0 15px 0;
          color: #1a202c;
          font-size: 1.25rem;
        }
        .meal-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }
        .meal-calories { color: #dd6b20; font-weight: 500; margin: 0; }
        .meal-price { color: #2b6cb0; font-weight: 600; margin: 0; }
        
        .meal-input {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #cbd5e0;
          border-radius: 6px;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .meal-input:focus {
          border-color: #4299e1;
        }
      `}</style>

      <h2 className="dashboard-header">Dietary Menu Dashboard</h2>

      <p className="dashboard-subtitle">Manage, filter, and sort meals in real-time with React optimization.</p>
      
      {/* Control Buttons */}
      <div className="button-group">
        <button className="btn btn-all" onClick={showAll}>Show All Meals</button>
        <button className="btn btn-diet" onClick={filterDiet}>Diet Mode (&lt; 400 cal)</button>
        <button className="btn btn-sort" onClick={sortByPrice}>Sort by Price (Low to High)</button>
      </div>

      {/* Grid List View */}
      <div className="meals-grid">
        {meals.map((meal) => (
          <MealCard 
            key={meal.id} /* Preserves state and input values across sort/filter mutations */
            name={meal.name}
            calories={meal.calories}
            price={meal.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;