import Card from "@/components/Card";
import React from "react";
import styles from "@/styles/Searchpage.module.css";

const Searchpage = ({ resSearch }) => {
  console.log(resSearch);
  return (
    <div className={`${styles.main_Search_Div}`}>
      {resSearch.data.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default Searchpage;

export async function getServerSideProps(constex) {
  const urlSearch = await fetch(
    `https://moviesapi.ir/api/v1/movies?q=${constex.params.Searchpage}&page={page}`
  );
  const resSearch = await urlSearch.json();
  return {
    props: {
      resSearch,
    },
  };
}
