// Form.js

import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({setRecommendations}) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);

    setRecommendations(dataRecommendations); // atualiza App
  };

  return (
    <form
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <Preferences
            preferences={preferences}
            onPreferenceChange={(selected) =>
              handleChange('selectedPreferences', selected)
            }
          />
        </div>
        <div className="md:w-1/2">
          <Features
            features={features}
            onFeatureChange={(selected) =>
              handleChange('selectedFeatures', selected)
            }
          />
        </div>
      </div>
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
