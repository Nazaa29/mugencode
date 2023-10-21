import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { formActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";



const Modal = () => {
    const show = useSelector(state => state.form.show);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(formActions.show());
    }

    return show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75" onClick={onClose}>
            <div className="modal bg-white w-300 rounded p-4 shadow-md relative">
                <div className="modal-header bg-green-200 p-2 rounded-t">
                    <span onClick={onClose} className="close-button absolute top-2 right-2 cursor-pointer">
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </div>
                <div className="modal-content p-4 text-center">
                    <div className="header">
                        <FontAwesomeIcon icon={faCheckCircle} className="confirmation-icon text-5xl text-green-500" />
                        <h2 className="text-2xl">Gracias por tomar el paso</h2>
                    </div>
                    <p className="mt-4">Nos comunicaremos con usted en las próximas 24 horas.</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;