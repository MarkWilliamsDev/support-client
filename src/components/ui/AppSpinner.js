import { observer } from 'mobx-react-lite'
import { Spinner } from 'react-bootstrap'
import { useStore } from '../../StoreProvider'

function AppSpinner() {
  const { uiStore } = useStore()

  return (
    <div
      className={`${
        uiStore.pending ? 'visible' : 'invisible'
      } position-absolute px-3 py-2 border top-50 start-50 translate-middle bg-light`}
    >
      <div className="d-flex align-items-center justify-content-between">
        <Spinner
          animation="border"
          role="status"
          aria-hidden="true"
          variant="primary"
        />
      </div>
    </div>
  )
}

export default observer(AppSpinner)
