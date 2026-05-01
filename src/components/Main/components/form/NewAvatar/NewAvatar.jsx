export default function NewAvatar(){
    return (
    <form
        className="popup__form"
        name="avatar-form"
        id="new-avatar-form"
        noValidate
        >
        <label className="popup__field">
          <input
            id="avatar-url"
            name="avatar-url"
            type="url"
            placeholder="URL de la imagen"
            className="popup__input popup__input_type_avatar-url"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error" id="avatar-url-error"></span>
        </label>
        <button type="submit" className="button popup__button">
            Guardar
        </button>
        
        </form>
    );
}