import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Honda20 from './honda20';
import Mazda13 from './mazda13';
import Mazda20 from './mazda20';
import Mazda26 from './mazda26';
import Mitsubishi4 from './mitsubishi4';
import Nissan26 from './nissan26';
import Nissan35 from './nissan35';
import Subaru from './subaru20';
import Toyota1 from './toyota1';
import Toyota2 from './toyota2';

export default class navigation extends Component {
  render() {
    return (
      <Router>
      <div className="navigation-container">
        <h1>TOP 10 Best Sounding JDM Engines</h1>
        <div className="navigation-grid">
          <div>
            <Link className="links" to="/toyota1">Toyota 1JZ-GTE</Link>
          </div>
          <div>
            <Link className="links" to="/toyota2">Toyota 2JZ-GTE</Link>
          </div>
          <div>
            <Link className="links" to="/subaru20">Subaru EJ20</Link>
          </div>
          <div>
            <Link className="links" to="/mazda20">Mazda 20B-REW</Link>
          </div>
          <div>
            <Link className="links" to="/nissan26">Nissan RB26DETT</Link>
          </div>
          <div>
          <Link className="links" to="/mazda13">Mazda 13B-REW</Link>
          </div>
          <div>
            <Link className="links" to="/mitsubishi4">Mitsubishi 4G63</Link>
          </div>
          <div>
            <Link className="links" to="/mazda26">Mazda 26B</Link>
          </div>
          <div>
            <Link className="links" to="/honda20">Honda F20C</Link>
          </div>
          <div>
            <Link className="links" to="/nissan35">Nissan VQ35DE</Link>
          </div>
        </div>
        <Switch>
            <Route exact path="/" component={""} exact />
            <Route path="/honda20" component={Honda20} />
            <Route path="/mazda13" component={Mazda13} />
            <Route path="/mazda20" component={Mazda20} />
            <Route path="/mazda26" component={Mazda26} />
            <Route path="/mitsubishi4" component={Mitsubishi4} />
            <Route path="/nissan26" component={Nissan26} />
            <Route path="/nissan35" component={Nissan35} />
            <Route path="/subaru20" component={Subaru} />
            <Route path="/toyota1" component={Toyota1} />
            <Route path="/toyota2" component={Toyota2} />
          </Switch>
      </div>

    </Router>
    )
  }
}
