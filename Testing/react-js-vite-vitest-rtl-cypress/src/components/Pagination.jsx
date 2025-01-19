import PropTypes from "prop-types";
import { range } from "../utils";

const Pagination = ({ total, limit, currentPage, selectPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount + 1);
  return (
    <ul className="pagination">
      {pages.map((page, index) => {
        return (
          <li
            data-testid={`page-container`}
            key={index}
            onClick={() => selectPage(page)}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <a className="page-link" onClick={() => selectPage(page)}>
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
// Add prop validation
Pagination.propTypes = {
  total: PropTypes.number.isRequired, // Requires `total` to be a number and non-null
  limit: PropTypes.number.isRequired, // Requires `limit` to be a number and non-null
  currentPage: PropTypes.number.isRequired, // Requires `currentPage` to be a number and non-null
  selectPage: PropTypes.func.isRequired, // Requires `selectPage` to be a function and non-null
};
export default Pagination;
