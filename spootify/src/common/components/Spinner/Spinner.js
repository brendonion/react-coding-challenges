import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './_spinner.scss';

export default function Spinner() {
  return (
    <div className="spinner">
      <FontAwesomeIcon icon={faSpinner} style={{ height: 50, width: 50 }} />
    </div>
  );
}
