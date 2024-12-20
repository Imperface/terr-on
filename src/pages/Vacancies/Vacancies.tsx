// import { VACANCIES_LIST } from "@/constants/vacancies";
import { VacanciesWrapper } from "./Vacancies.styled";
// import { CustomSwiper } from "@/shared/Swiper/Swiper";

const Vacancies = () => {
  // const a = VACANCIES_LIST.map((vacancy) => (
  //   <div className="swiper-slide" key={vacancy.title}>
  //     <div className="title">{vacancy.title}</div>
  //     <div className="img">
  //       <image href={vacancy.imgUrl} />
  //     </div>
  //   </div>
  // ));

  return (
    <VacanciesWrapper>
      Vacancies
      {/* <CustomSwiper vacancies={VACANCIES_LIST} /> */}
    </VacanciesWrapper>
  );
};

export default Vacancies;
