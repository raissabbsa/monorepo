// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: 'SingleProduct' },
  products
) => {
  const { selectedPreferences = [], 
    selectedFeatures = [], 
    selectedRecommendationType = 'SingleProduct' 
  } = formData;

  const matches = products.map(product => {
    const preferenceMatches = selectedPreferences.filter(p => product.preferences.includes(p)).length;
    const featureMatches = selectedFeatures.filter(f => product.features.includes(f)).length;

    return {
      ...product,
      score: preferenceMatches + featureMatches
    };
  }).filter(product => product.score > 0);

  if (selectedRecommendationType === 'SingleProduct') {
    // Retorna o último com maior score
    const maxScore = Math.max(...matches.map(p => p.score));
    const topProducts = matches.filter(p => p.score === maxScore);
    return topProducts.length > 0 ? [topProducts[topProducts.length - 1]] : [];
  }

  return matches;
};

export default { getRecommendations };
