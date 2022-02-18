import './index.css'

const FiltersBook = props => {
  const {booksList} = props
  return booksList.map(category => {
    const {changeCategory, activeCategoryId} = props
    const onSelectBookshelves = () => changeCategory(category.employmentTypeId)
    const isActive = category.employmentTypeId === activeCategoryId
    const categoryClassName = isActive
      ? `category-name active-category-name`
      : `category-name`
    const isDesc = category.employmentTypeId === activeCategoryId
    const classNameDesc = isDesc ? `category-desc active-desc` : `category-desc`
    return (
      <>
        <li
          className="filters-book-items-desktop"
          onClick={onSelectBookshelves}
        >
          <p className={classNameDesc}>{category.name}</p>
        </li>
        <li
          className="filters-book-items-small"
          key={category.employmentTypeId}
          onClick={onSelectBookshelves}
        >
          <button type="button" className={categoryClassName}>
            {category.name}
          </button>
        </li>
      </>
    )
  })
}
export default FiltersBook
