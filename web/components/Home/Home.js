/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from 'components/Header';

import splash from 'images/landing-splash.jpg';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home__splash">
          <h1 className="home__splash-title">hello</h1>
          <img className="home__splash-image" src={splash} alt="splash" />
        </div>
        <div className="page__content page__content--left">
          <p>
            Lorem ipsum dolor sit amet, appareat qualisque elaboraret nec an, cu mea iudico cetero suscipit, quo te
            justo epicurei. Te pericula euripidis gloriatur est, ei pri vero clita voluptatum, patrioque maiestatis ei
            usu. Natum doctus invidunt no vel, quaeque omittam offendit ius eu. Quo et feugiat impedit liberavisse.
          </p>
          <p>
            Sumo recusabo comprehensam eu mel, ut accusata accusamus nam. Regione menandri ei has, mel tollit repudiare
            voluptatibus in. Quando luptatum ullamcorper ei vel, his vidit legere persecuti eu, no eam ignota legimus
            cotidieque. Vidisse commune constituam an sea, eu errem malorum voluptatibus per. Vocibus lobortis at vel,
            no vero tation appellantur est.
          </p>
          <p>
            In atqui populo vim. Usu velit invidunt rationibus an, justo feugiat reprehendunt te mel. Eam eu agam
            audiam, et per tation maiestatis efficiendi, ei quo corpora invenire. Diam augue eripuit ad per. Elitr vitae
            saperet at nec, vidisse blandit vix ut. Cum cu illud tibique omittam, nam dignissim conceptam ullamcorper
            at, an eam dico lobortis. Mei nullam phaedrum ei.
          </p>
          <p>
            Qui eros vocent cu, vis error euismod adipiscing cu. Ut viderer bonorum sanctus usu, quo deleniti detraxit
            ut, est ad deserunt principes. Cu nostrud appareat adipisci vix, mea delectus eloquentiam concludaturque ad.
            Qui ad latine sapientem, id mei congue mentitum. His tota assentior ad, ne pro rebum harum.
          </p>
          <p>
            Te per temporibus referrentur, has id feugait pericula convenire. Duo no graeco eripuit, justo mollis per
            id, duo ne duis idque vidisse. Mea at vocibus gubergren adipiscing, an ius veri persequeris. Odio impedit
            vim ei, timeam mediocrem pro at. Duo error adversarium ut, ullum semper oportere ad vel, ne enim simul
            assueverit nec. Ut est dolorum recusabo, qui ad nibh viderer singulis, cu vel dico labore euripidis.
          </p>
          <p>
            Dicta voluptatum eum ad, at error numquam per. Ne mei melius impetus, diceret efficiendi te mel. Ut vel
            aliquip fabulas urbanitas, in mea offendit partiendo. His inani scripta molestie ea. Viderer consulatu
            conclusionemque mel ei, quaeque dissentiet ex est. An quo voluptua pertinax.
          </p>
          <p>
            Scriptorem voluptatibus sit ne, dolor persecuti quo eu, ea cum detracto percipitur eloquentiam. Eam in mutat
            partem, quo et elit veri accusamus. Eu mel meis graecis aliquando. Has at commune offendit, ne eum cibo
            vidit accusamus. Ei graeco aliquip corrumpit pro, usu legimus percipit no. Dicta quidam an pro.
          </p>
          <p>
            Usu libris discere prodesset ex. Eius constituam efficiantur te est. No quo partem dicunt perfecto, id agam
            commodo mei. Sit nisl nullam delicata ad, at vidisse invenire concludaturque mei, et nec feugait honestatis.
            Qui ex nisl sententiae referrentur, tota iuvaret an nam. Stet justo usu cu, mea ludus assentior constituam
            et, dicta oportere no mea. Mei patrioque assentior complectitur ea, ne putant minimum sapientem eam, modo
            tamquam ea eos.
          </p>
          <p>
            Voluptua vivendum deserunt eos in, deseruisse omittantur ad vim. Et dicant feugiat perfecto ius, regione
            sanctus nam ne. Docendi instructior nec in. Ei timeam convenire consequat mea, eos in ipsum necessitatibus,
            has in dicant phaedrum qualisque. Per apeirian temporibus reformidans in, causae laboramus te vis, mazim
            consul tibique vim no.
          </p>
          <p>
            Has choro regione sententiae cu, ex pro elit putant facilis. Utamur mediocritatem sed ei, cu idque probatus
            patrioque nec. Mel aliquip mentitum invidunt ei, ne qui scripta tincidunt, ad qui enim vituperata. An illud
            intellegam sed. Consulatu gloriatur cu sea, vix cu inani lucilius delicatissimi. Ius ad harum fastidii
            invidunt, ad habemus corrumpit est, at stet adhuc democritum pro.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
