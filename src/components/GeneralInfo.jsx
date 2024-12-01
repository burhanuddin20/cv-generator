import FormSection from './FormSection';

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const handleChange = (event) => {
    const { id, value } = event.target;
    setGeneralInfo({ ...generalInfo, [id]: value });
  };

  return (
    <FormSection title="General Information">
      <div>
        <label htmlFor="name">Name</label>
        <input
          placeholder="First and last name"
          type="text"
          id="name"
          value={generalInfo.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter email"
          type="email"
          id="email"
          value={generalInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          placeholder="Enter phone number"
          type="tel"
          id="phone"
          value={generalInfo.phone}
          onChange={handleChange}
        />
      </div>
    </FormSection>
  );
}

export { GeneralInfo };
