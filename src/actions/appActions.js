export function loadPageItems(page_number) {
  return {
    type: 'REQUEST_PAGE_ITEMS',
    page: page_number
  };
}
