import { NotificationButton } from "../NotificationButton";
import './styles.css'

export function SalesCard(){
  return (
    <div className="dsmeta-card">
            <h2>VENDAS</h2>
            <div>
              <div className="dsmeta-form-control-container">
                <input className="dsmeta-form-control" type="text" name="" id="" />
              </div>
              <div className="dsmeta-form-control-container">
                
                <input className="dsmeta-form-control" type="text" name="" id="" />
              </div>
            </div>
            
            <div>
              <table className="dsmeta-sales-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show-date">Data</th>
                    <th>Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="show992">1</td>
                    <td className="show-date">11/06/2022</td>
                    <td>Naruto</td>
                    <td className="show992">777</td>
                    <td className="show992">102</td>
                    <td>55259.0</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        
                          <NotificationButton />
                        
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">2</td>
                    <td className="show-date">11/06/2022</td>
                    <td>Naruto</td>
                    <td className="show992">777</td>
                    <td className="show992">102</td>
                    <td>55259.0</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <NotificationButton />
                      </div>
                      
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">3</td>
                    <td className="show-date">11/06/2022</td>
                    <td>Naruto</td>
                    <td className="show992">777</td>
                    <td className="show992">102</td>
                    <td>55259.0</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <NotificationButton />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

        </div>
  )
}