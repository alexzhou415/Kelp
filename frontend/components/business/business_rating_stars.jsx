import ShowStar0 from "../../../app/assets/images/stars/show-0.png";
import ShowStar1 from "../../../app/assets/images/stars/show-1.png";
import ShowStar15 from "../../../app/assets/images/stars/show-1.5.png";
import ShowStar2 from "../../../app/assets/images/stars/show-2.png";
import ShowStar25 from "../../../app/assets/images/stars/show-2.5.png";
import ShowStar3 from "../../../app/assets/images/stars/show-3.png";
import ShowStar35 from "../../../app/assets/images/stars/show-3.5.png";
import ShowStar4 from "../../../app/assets/images/stars/show-4.png";
import ShowStar45 from "../../../app/assets/images/stars/show-4.5.png";
import ShowStar5 from "../../../app/assets/images/stars/show-5.png";
import IndexStar0 from "../../../app/assets/images/stars/index-0.png";
import IndexStar1 from "../../../app/assets/images/stars/index-1.png";
import IndexStar15 from "../../../app/assets/images/stars/index-1.5.png";
import IndexStar2 from "../../../app/assets/images/stars/index-2.png";
import IndexStar25 from "../../../app/assets/images/stars/index-2.5.png";
import IndexStar3 from "../../../app/assets/images/stars/index-3.png";
import IndexStar35 from "../../../app/assets/images/stars/index-3.5.png";
import IndexStar4 from "../../../app/assets/images/stars/index-4.png";
import IndexStar45 from "../../../app/assets/images/stars/index-4.5.png";
import IndexStar5 from "../../../app/assets/images/stars/index-5.png";


export const ShowStar = (rating) => {

  if (rating < 1) return ShowStar0;
  if (rating < 1.5) return ShowStar1;
  if (rating < 2) return ShowStar15;
  if (rating < 2.5) return ShowStar2;
  if (rating < 3) return ShowStar25;
  if (rating < 3.5) return ShowStar3;
  if (rating < 4) return ShowStar35;
  if (rating < 4.5) return ShowStar4;
  if (rating < 5) return ShowStar45;
  return ShowStar5;
}
export const IndexStar = (rating) => {
  if (rating < 1) return IndexStar0;
  if (rating < 1.5) return IndexStar1;
  if (rating < 2) return IndexStar15;
  if (rating < 2.5) return IndexStar2;
  if (rating < 3) return IndexStar25;
  if (rating < 3.5) return IndexStar3;
  if (rating < 4) return IndexStar35;
  if (rating < 4.5) return IndexStar4;
  if (rating < 5) return IndexStar45;
  return IndexStar5;
};
// export const Show1Star = (rating) => {
//   return ShowStar1;
// };

// export const Show15Star = (rating) => {
//   return ShowStar15;
// };

// export const Show2Star = (rating) => {
//   return ShowStar2;
// };

// export const Show25Star = (rating) => {
//   return ShowStar25;
// };

// export const Show3Star = (rating) => {
//   return ShowStar3;
// };

// export const Show35Star = () => {
//   return ShowStar35;
// };

// export const Show4Star = () => {
//   return ShowStar4;
// };

// export const Show45Star = () => {
//   return ShowStar45;
// };

// export const Show5Star = () => {
//   return ShowStar5;
// };

// export const Index0Star = () => {
//   return IndexStar0;
// };

// export const Index1Star = () => {
//   return IndexStar1;
// };

// export const Index15Star = () => {
//   return IndexStar15;
// };

// export const Index2Star = () => {
//   return IndexStar2;
// };

// export const Index25Star = () => {
//   return IndexStar25;
// };

// export const Index3Star = () => {
//   return IndexStar3;
// };

// export const Index35Star = () => {
//   return IndexStar35;
// };

// export const Index4Star = () => {
//   return IndexStar4;
// };

// export const Index45Star = () => {
//   return IndexStar45;
// };

// export const Index5Star = () => {
//   return IndexStar5;
// };




