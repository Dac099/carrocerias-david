import style from './page.module.css';

type Props = {
  params: Promise<{quote_id: string}>;
};

export default async function Page({params}: Props) {
  const { quote_id } = await params;
  
  return (
    <article className={style.container}>
      <p>{quote_id}</p>
    </article>
  );
}