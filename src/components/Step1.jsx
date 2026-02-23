const Step1 = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Child Details</h2>

      <div className="mb-4">
        <label className="font-medium">Child Age</label>
        <input
          type="number"
          className="w-full mt-1 p-2 border rounded-lg"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: e.target.value })
          }
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </div>

      <div className="mb-4">
        <label className="font-medium">Diagnosis</label>
        <select
          className="w-full mt-1 p-2 border rounded-lg"
          value={formData.diagnosis}
          onChange={(e) =>
            setFormData({ ...formData, diagnosis: e.target.value })
          }
        >
          <option value="">Select Diagnosis</option>
          <option>Dyslexia</option>
          <option>ADHD</option>
          <option>Autism</option>
        </select>
        {errors.diagnosis && (
          <p className="text-red-500 text-sm">{errors.diagnosis}</p>
        )}
      </div>

      <div>
        <label className="font-medium">School Type</label>
        <div className="flex gap-4 mt-2">
          {["Public", "Private", "Special School"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="school"
                value={type}
                onChange={() =>
                  setFormData({ ...formData, schoolType: type })
                }
                checked={formData.schoolType === type}
              />
              {type}
            </label>
          ))}
        </div>
        {errors.schoolType && (
          <p className="text-red-500 text-sm">{errors.schoolType}</p>
        )}
      </div>
    </div>
  );
};

export default Step1;