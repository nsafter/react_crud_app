import "./Read.css";
import CountButton from "../countButton/countButton";
const Read = () => {
  return (
    <>
      <div className="read-container animate__animated animate__fadeIn animate__slow">
        <center>
          <table className="table-data ">
            <thead>
              <tr className="thead">
                <th>ItemCode</th>
                <th>WareHouse Location</th>
                <th>In Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CTTLG</td>
                <td>Demark-CTG</td>
                <td>
                  <CountButton />
                </td>
              </tr>
              <tr>
                <td>CTTMG</td>
                <td>Ireland-CGG</td>
                <td>
                  <CountButton />
                </td>
              </tr>
              <tr>
                <td>CTTLK</td>
                <td>Demark-CTG</td>
                <td>
                  <CountButton />
                </td>
              </tr>
              <tr>
                <td>CTTJJ</td>
                <td>SanFrancisco-CTG</td>
                <td>
                  <CountButton />
                </td>
              </tr>
              <tr>
                <td>CTTHG</td>
                <td>Asia(Malaysia)-CTK</td>
                <td>
                  <CountButton />
                </td>
              </tr>
              <tr>
                <td>CTTTT</td>
                <td>Demark-CTG</td>
                <td>
                  <CountButton />
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
};

export default Read;
