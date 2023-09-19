import { FIRST_PAGE_NUMBER } from '@/helpers/collection';

interface PaginationInterface {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function usePagination({ currentPage, totalPages, setPage }: PaginationInterface) {
  const canGoPrev = currentPage > FIRST_PAGE_NUMBER;
  const canGoNext = totalPages > currentPage;

  const goNextPage = () => {
    if (canGoNext) {
      setPage(currentPage + 1);
    }
  };

  const goPrevPage = () => {
    if (canGoPrev) {
      setPage(currentPage - 1);
    }
  };

  return {
    canGoNext,
    canGoPrev,
    goNextPage,
    goPrevPage
  };
}
