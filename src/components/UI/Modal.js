import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck, faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { formActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";



const Modal = () => {
    const show = useSelector(state => state.form.show);
    const modalCheck = useSelector(state => state.form.modalCheck);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(formActions.show());
    }

    const handleModalClick = (e) => {
        e.stopPropagation();
    }

    return show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75" onClick={onClose}>
            <div className="bg-gray-custom w-300 rounded shadow-md relative text-center align-middle w-[35%]" onClick={handleModalClick}>
            <div className={`${modalCheck ? 'bg-dark-custom' : 'bg-red-custom'} p-2 rounded-t h-36 flex justify-center items-center`}>
                    <span onClick={onClose} className="absolute top-2 right-2 cursor-pointer text-gray-custom transition-all hover:text-black">
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    {modalCheck ? (
                        <FontAwesomeIcon icon={faCircleCheck} className="text-7xl text-green-600" />
                    ) : (
                        <FontAwesomeIcon icon={faCircleXmark} className="text-7xl text-gray-custom" />
                    )}
                </div>
                <div className="modal-content p-4 text-center">
                    {modalCheck ? (
                        <div className="header">
                            <h2 className="text-2xl">¡Gracias por ponerse en contacto con nosotros!</h2>
                        </div>
                    ) : (
                        <div className="header">
                            <h2 className="text-2xl">¡Ups, ha ocurrido un error!</h2>
                        </div>
                    )}
                    {modalCheck ? (
                        <p className="mt-4">Valoramos su interés y esperamos colaborar juntos para convertir su visión en realidad. Nos comunicaremos con usted en breve para discutir los detalles.</p>
                    ) : (
                        <p className="mt-4">Lo sentimos, no se pudo enviar el formulario. Por favor, inténtelo de nuevo más tarde.</p>
                    )}
                </div>
            </div>
        </div>
        
    );
};

export default Modal;