const Step3 = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

      <div className="mb-4">
        <label className="font-medium">Parent Name</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded-lg"
          value={formData.parentName}
          onChange={(e) =>
            setFormData({ ...formData, parentName: e.target.value })
          }
        />
        {errors.parentName && (
          <p className="text-red-500 text-sm">{errors.parentName}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="font-medium">Email</label>
        <input
          type="email"
          className="w-full mt-1 p-2 border rounded-lg"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="font-medium">Phone Number</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded-lg"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone}</p>
        )}
      </div>
    </div>
  );
};

export default Step3;