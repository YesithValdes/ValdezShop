// https://getbootstrap.com/docs/5.3/content/tables/
import { Title } from '@/components/ui';
import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

export default function () {
  return (
    <>
      <Title title="Mis Pedidos" />

      <div className="container mt-4">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Nombre completo</th>
              <th scope="col">Estado</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>   
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>
                <div className="d-flex align-items-center">
                  <IoCardOutline className="text-success" />
                  <span className="ms-2 text-success">Pagada</span>
                </div>
              </td>
              <td>
                <Link href="/orders/123" className="text-decoration-underline">
                  Ver orden
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>
                <div className="d-flex align-items-center">
                  <IoCardOutline className="text-danger" />
                  <span className="ms-2 text-danger">No Pagada</span>
                </div>
              </td>
              <td>
                <Link href="/orders/456" className="text-decoration-underline">
                  Ver orden
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
