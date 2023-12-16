import { Button, ButtonActive, NextIcon, PrevIcon, Wrapper } from "./styles";

interface IPaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange?: (page: number) => void;
}
export default function Pagination({
  currentPage,
  totalPage,
  onPageChange,
}: IPaginationProps) {
  function handlePageChange(page: number) {
    if (onPageChange) {
      onPageChange(page);
    }
  }

  function middleRangeButtons() {
    const pages = Math.floor(5 / 2);
    const startPage = Math.max(1, currentPage - pages);
    const endPage = Math.min(totalPage, startPage + 4);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const pageIndex = startPage + index;

      return (
        <>
          {pageIndex === currentPage ? (
            <ButtonActive onClick={() => handlePageChange(pageIndex)}>
              {pageIndex}
            </ButtonActive>
          ) : (
            <Button onClick={() => handlePageChange(pageIndex)}>
              {pageIndex}
            </Button>
          )}
        </>
      );
    });
  }

  return (
    <Wrapper>
      <PrevIcon onClick={() => handlePageChange(currentPage - 1)} size={24} />
      {middleRangeButtons()}
      <NextIcon onClick={() => handlePageChange(currentPage + 1)} size={24} />
    </Wrapper>
  );
}
