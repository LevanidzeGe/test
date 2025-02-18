import { ourTeamData } from "./OurTeamData";
import styles from "./OurTeam.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function OurTeam() {
  const locale = useLocale();
  return (
    <section className="section">
      <div className="container">
        <div className={styles.wrapper}>
          {ourTeamData.map((team, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <Image
                  width={200}
                  height={200}
                  src={team.image}
                  alt={team.name}
                />
              </div>
              <h3 className="heading5 color5">{team.name}</h3>
              <h4 className="heading4 color3">{team.role[locale]} </h4>
              <Link href={`mailto: ${team.email}`} className="caption gray7">
                {team.email}
              </Link>
              <p className="paragraph gray7 ">{team.description[locale]} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
