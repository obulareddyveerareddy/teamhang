/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import * as M from 'materialize-css/dist/js/materialize';
import styled from 'styled-components';

import BaseParallaxImage from '../../images/home/Parallax-Background-Light-06.jpg';
import FirstParallaxImage from '../../images/home/home-page-stm-parallax.jpg';
import FixedNavbar from '../../components/navbar/fixedNavMenu';

const Parallax = styled.div`
  z-index: 0 !important;
`;

export default function HomePage() {
  React.useEffect(() => {
    const elements = document.querySelectorAll('.parallax');
    M.Parallax.init(elements, {});
  }, [BaseParallaxImage]);

  return (
    <>
      <FixedNavbar />
      <div className="parallax-container">
        <Parallax className="parallax">
          <img alt="Bookkeeping" src={BaseParallaxImage} />
        </Parallax>
      </div>
      <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>
          <p>
            3 wolf moon retro jean shorts chambray sustainable roof party.
            Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park
            Godard kogi, next level irony ennui twee squid fap selvage. Meggings
            flannel Brooklyn literally small batch, mumblecore PBR try-hard kale
            chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut
            leggings squid chillwave pickled gentrify mustache. 3 wolf moon
            hashtag church-key Odd Future. Austin messenger bag normcore,
            Helvetica Williamsburg sartorial tote bag distillery Portland before
            they sold out gastropub taxidermy Vice.
          </p>
        </div>
      </div>
      <div className="parallax-container">
        <Parallax className="parallax">
          <img alt="Bookkeeping" src={FirstParallaxImage} />
        </Parallax>
      </div>
      <footer className="page-footer light-blue accent-2">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
