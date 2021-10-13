import type { NextPage } from "next";
import Head from "next/head";
import { NavLinks, PageTitle, SourceLink } from "../components";

const Page20: NextPage = () => {
  return (
    <div>
      <Head>
        <title>தமிழ்நாடு பொறியியல் படிப்புகள் கலந்தாய்வு வழிகாட்டி - 20</title>
        <meta
          name="description"
          content="தமிழ்நாடு பொறியியல் படிப்புகள் கலந்தாய்வு வழிகாட்டி - 20"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle title="பகுதி - 20" />
      <div>
        <p>
          <strong>
            கேள்வி: தமிழ்நாட்டின் முன்னணி மாநில அரசு / அரசு உதவி பெறும்
            கல்லூரிகள், ஒன்றிய அரசு நிறுவனங்கள் நடத்தும் கல்லூரிகள் யாவை?
          </strong>
        </p>
        <p>பதில்:</p>
        <p>
          இதோ! 2021ஆம் ஆண்டு Top 10,000 மாணவர்கள் கலந்து கொண்ட முதல் சுற்றுக்
          கலந்தாய்வில் தேர்ந்தெடுத்த இடங்கள் அடிப்படையில்,
        </p>
        <p>முன்னணி அரசு, அரசு உதவி பெறும், ஒன்றிய அரசு கல்லூரிகள் பட்டியல்.</p>
        <p>(இந்த ஆய்வுக்கு ஆதாரமான Round 1 counselling admission பட்டியல்)</p>
        <p>
          <SourceLink
            target="_blank"
            href="https://static.tneaonline.org/docs/ACADEMIC_ROUND1.pdf?t=1633783186406&fbclid=IwAR1YUxevK7v4XX2ue8VA7AeZ1M1akKLXkvEbmpFFxSbalYoBJwPeLXQ5YAo"
          >
            TAMILNADU ENGINEERING ADMISSIONS (TNEA) - 2021
          </SourceLink>
        </p>
      </div>
      <div>
        <SourceLink href="https://www.facebook.com/groups/1143641272471082/posts/1950674451767756/">
          Source article link
        </SourceLink>
      </div>
      <NavLinks>
        <SourceLink href="/page-19">Previous</SourceLink>
        <SourceLink href="/page-21">Next</SourceLink>
      </NavLinks>
    </div>
  );
};

export default Page20;
