import './styles.css';
type Props = {
  name: string;
};
const CategoryBadge = ({ name }: Props) => {
    console.log( name) ;
  return <div className="category-badge-container">{name}</div>;
};

export default CategoryBadge;
