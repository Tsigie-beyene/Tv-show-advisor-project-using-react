import s from "./style.module.css";

export function Logo({ img, title, subtitle }) {
  return (
    <div>
      <div className={s.container}>
        <img className={s.img} src={img} alt="logo" />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </div>
  );
}