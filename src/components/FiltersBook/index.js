import './index.css'

const FiltersBook = props => {
  const {booksList} = props
  return booksList.map(category => {
    const {changeCategory, activeCategoryId} = props
    const onSelectBookshelves = () => changeCategory(category.employmentTypeId)
    /*  const isActive = category.employmentTypeId === activeCategoryId
     const categoryClassName = isActive
      ? `category-name active-category-name`
      : `category-name` */
    const isDesc = category.employmentTypeId === activeCategoryId
    const classNameDesc = isDesc ? `category-desc active-desc` : `category-desc`
    return (
      <>
        <li
          className="filters-book-items-desktop"
          key={category.employmentTypeId}
          onClick={onSelectBookshelves}
        >
          <p className={classNameDesc}>{category.name}</p>
        </li>
      </>
    )
  })
}
export default FiltersBook
