import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold hover:text-indigo-400">
          Hi, I am Nathan!
        </h2>

        <p className="leading-loose">I like coding, and conveinence</p>
        <p>Especially in Javascript</p>
      </section>
      <section>
        <h1 className="transition ease-in-ease-out duration-500 transform hover:underline ">
          Projects
        </h1>
      </section>
    </Layout>
  );
}

export default IndexPage;
