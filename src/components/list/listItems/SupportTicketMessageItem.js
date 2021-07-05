import DateDisplay from '../../display/elements/DateDisplay'
import StringDisplay from '../../display/elements/StringDisplay'

function SupportTicketMessageItem({ item }) {
  return (
    <div className={`row ${!item.isFromUser && 'justify-content-end'}`}>
      <div className="col-11">
        <div className="row border mt-2">
          <div className="col">
            <div className="row bg-light py-1 px-2">
              <div className="col-2">
                <h6 className="me-4">
                  <StringDisplay label={'From: '} content={item.from} />
                </h6>
              </div>
              <div className="col-4 text-secondary">
                <DateDisplay date={item.createdAt} />
              </div>
            </div>
          </div>
          <div className="px-2 py-1">
            <div className="row justify-content-end">
              <div className="col">
                <StringDisplay content={item.message} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportTicketMessageItem
