const Step2 = ({ formData, setFormData, errors }) => {
  const toggleSupportType = (value) => {
    const updated = formData.supportTypes.includes(value)
      ? formData.supportTypes.filter((v) => v !== value)
      : [...formData.supportTypes, value];

    setFormData({ ...formData, supportTypes: updated });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Service Needs</h2>

      <label className="font-medium">Support Types</label>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {["Speech Therapy", "Behavior Coaching", "Reading Support", "Math Support"].map(
          (type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.supportTypes.includes(type)}
                onChange={() => toggleSupportType(type)}
              />
              {type}
            </label>
          )
        )}
      </div>
      {errors.supportTypes && (
        <p className="text-red-500 text-sm">{errors.supportTypes}</p>
      )}

      <div className="mt-4">
        <label className="font-medium">Preferred Frequency</label>
        <select
          className="w-full mt-1 p-2 border rounded-lg"
          value={formData.frequency}
          onChange={(e) =>
            setFormData({ ...formData, frequency: e.target.value })
          }
        >
          <option value="">Select</option>
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
        {errors.frequency && (
          <p className="text-red-500 text-sm">{errors.frequency}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="font-medium">Specific Requirements</label>
        <textarea
          className="w-full mt-1 p-2 border rounded-lg"
          value={formData.requirements}
          onChange={(e) =>
            setFormData({ ...formData, requirements: e.target.value })
          }
        ></textarea>
      </div>
    </div>
  );
};

export default Step2;