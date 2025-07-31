import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
