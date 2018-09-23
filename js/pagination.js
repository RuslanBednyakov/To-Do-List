var Pagination = (function (){
  const Pagination = function () {
    this.pageSize = 5;
    this.pageDomContainerParent = document.querySelector('.container__task');
    this.pageDomContainer = document.querySelector('.container__pagination');
    this.pages = 0;
    this.currentPage = 1;
  };

  function setPages(allElemets, pageSize) {
    if (allElemets <= pageSize) return false;
    const numberOfPages = Math.ceil(allElemets/pageSize);
    return numberOfPages;
  };

  function createElem(newElem, elemClass, elemText) {
    const elem = document.createElement(newElem);
    elem.classList.add(elemClass);
    if (elemText) {
        const text = document.createTextNode(elemText);
        elem.appendChild(text);
    };
    return elem;
  };

  function pageEvent (pagination, pageNumber, func) {
    return function() {
      pagination.currentPage = pageNumber;
      func();
    }
  };

  function deletePages (pagination) {
    const emptyContainer = pagination.pageDomContainer.cloneNode(false);
    pagination.pageDomContainerParent.replaceChild(emptyContainer, pagination.pageDomContainer);
    pagination.pageDomContainer = emptyContainer;
  };

  Pagination.prototype = {
    paginationRender: function (storage, self, func) {
      const numberOfPages = setPages(storage.length, self.pageSize);
      if(!numberOfPages) {
        deletePages(self);
        self.pages = 0;
        self.currentPage = 1;
        return storage;
      }
      if(numberOfPages !== self.pages){
        if(self.pageDomContainer.firstChild) {
          deletePages(self);
        };
        const fragment = document.createDocumentFragment();
        for(let i = 1; i <= numberOfPages; i++) {
          const page = createElem('a', 'container__pagination_item', i);
          page.addEventListener('click', pageEvent(self, i, func));
          fragment.appendChild(page);
        };
        self.pageDomContainer.appendChild(fragment);
      }
      if(self.currentPage > numberOfPages) {
        self.currentPage = numberOfPages;
      };
      const pagedStorage = storage.filter(function(item, i) {
        return ((self.pageSize * (self.currentPage - 1)) <= i && i <= ((self.pageSize * self.currentPage) - 1));
      });
      self.pages = numberOfPages;
      return pagedStorage;
    },

    setPageSize: function (self, func, number) {
      self.pageSize = number;
      func();
    },
  };

  return Pagination;
})()