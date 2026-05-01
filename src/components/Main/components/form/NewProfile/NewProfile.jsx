export default function NewProfile(){
    return (
    <form
        className="popup__form"
        name="profile-form"
        id="new-profile-form"
        noValidate
        >
        <label className="popup__field">
          <input
            id="profile-name"
            name="profile-name"
            type="text"
            placeholder="Name"
            className="popup__input popup__input_type_profile-name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error" id="profile-name-error"></span>
        </label>
        <label className="popup__field">
          <input
            id="profile-about"
            name="profile-about"
            placeholder="Acerca de mi"
            className="popup__input popup__input_type_about"
            minLength="2"
            maxLength="40"
            required
            type="text"
          />
          <span className="popup__error" id="profile-about-error"></span>
        </label>
        <button type="submit" className="button popup__button">
            Guardar
        </button>
        
        </form>
    );
}