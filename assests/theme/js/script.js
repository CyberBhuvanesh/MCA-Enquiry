/*!
 * Mobirise v4 theme (https://mobirise.com/)
 * Copyright 2017 Mobirise
 */
section {
  background-color: #eeeeee;
}

section,
.container,
.container-fluid {
  position: relative;
  word-wrap: break-word;
}

a.mbr-iconfont:hover {
  text-decoration: none;
}

.article .lead p, .article .lead ul, .article .lead ol, .article .lead pre, .article .lead blockquote {
  margin-bottom: 0;
}

a {
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
}

a, a:hover {
  text-decoration: none;
}

figure {
  margin-bottom: 0;
}

body {
  color: #232323;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6,
.display-1, .display-2, .display-3, .display-4 {
  line-height: 1;
  word-break: break-word;
  word-wrap: break-word;
}

b, strong {
  font-weight: bold;
}

blockquote {
  padding: 10px 0 10px 20px;
  position: relative;
  border-left: 2px solid;
  border-color: #ff3366;
}

input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
  transition-delay: 9999s;
  transition-property: background-color, color;
}

textarea[type="hidden"] {
  display: none;
}

body {
  position: relative;
}

section {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

section .mbr-background-video,
section .mbr-background-video-preview {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}

.hidden {
  visibility: hidden;
}

.mbr-z-index20 {
  z-index: 20;
}

/*! Base colors */
.mbr-white {
  color: #ffffff;
}

.mbr-black {
  color: #000000;
}

.mbr-bg-white {
  background-color: #ffffff;
}

.mbr-bg-black {
  background-color: #000000;
}

/*! Text-aligns */
.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

@media (max-width: 767px) {
  .align-left, .align-center, .align-right, .mbr-section-btn, .mbr-section-title {
    text-align: center;
  }
}

/*! Font-weight  */
.mbr-light {
  font-weight: 300;
}

.mbr-regular {
  font-weight: 400;
}

.mbr-semibold {
  font-weight: 500;
}

.mbr-bold {
  font-weight: 700;
}

/*! Media  */
.media-size-item {
  -webkit-flex: 1 1 auto;
  -moz-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  -o-flex: 1 1 auto;
  flex: 1 1 auto;
}

.media-content {
  -webkit-flex-basis: 100%;
  flex-basis: 100%;
}

.media-container-row {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: start;
  -ms-flex-align: start;
  align-items: start;
}

.media-container-row .media-size-item {
  width: 400px;
}

.media-container-column {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.media-container-column > * {
  width: 100%;
}

@media (min-width: 992px) {
  .media-container-row {
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
}

figure {
  overflow: hidden;
}

figure[mbr-media-size] {
  transition: width 0.1s;
}

.mbr-figure img, .mbr-figure iframe {
  display: block;
  width: 100%;
}

.card {
  background-color: transparent;
  border: none;
}

.card-box {
  width: 100%;
}

.card-img {
  text-align: center;
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
}

.media {
  max-width: 100%;
  margin: 0 auto;
}

.mbr-figure {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  -webkit-align-self: center;
  align-self: center;
}

.media-container > div {
  max-width: 100%;
}

.mbr-figure img, .card-img img {
  width: 100%;
}

@media (max-width: 991px) {
  .media-size-item {
    width: auto !important;
  }
  .media {
    width: auto;
  }
  .mbr-figure {
    width: 100% !important;
  }
}

/*! Buttons */
.mbr-section-btn {
  margin-left: -.25rem;
  margin-right: -.25rem;
  font-size: 0;
}

nav .mbr-section-btn {
  margin-left: 0rem;
  margin-right: 0rem;
}

/*! Btn icon margin */
.btn .mbr-iconfont, .btn.btn-sm .mbr-iconfont {
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn.btn-md .mbr-iconfont, .btn.btn-md .mbr-iconfont {
  margin-right: 0.8rem;
}

.mbr-regular {
  font-weight: 400;
}

.mbr-semibold {
  font-weight: 500;
}

.mbr-bold {
  font-weight: 700;
}

[type="submit"] {
  -webkit-appearance: none;
}

/*! Full-screen */
.mbr-fullscreen .mbr-overlay {
  min-height: 100vh;
}

.mbr-fullscreen {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  align-items: center;
  -webkit-align-items: center;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

/*! Map */
.map {
  height: 25rem;
  position: relative;
}

.map iframe {
  width: 100%;
  height: 100%;
}

/* Form */
.form-asterisk {
  font-family: initial;
  position: absolute;
  top: -2px;
  font-weight: normal;
}

/*! Scroll to top arrow */
.mbr-arrow-up {
  bottom: 25px;
  right: 90px;
  position: fixed;
  text-align: right;
  z-index: 5000;
  color: #ffffff;
  font-size: 32px;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.mbr-arrow-up a {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  height: 60px;
  width: 60px;
  outline-style: none !important;
  position: relative;
  text-decoration: none;
  transition: all .3s ease-in-out;
  cursor: pointer;
  text-align: center;
}

.mbr-arrow-up a:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

.mbr-arrow-up a i {
  line-height: 60px;
}

.mbr-arrow-up-icon {
  display: block;
  color: #fff;
}

.mbr-arrow-up-icon::before {
  content: "\203a";
  display: inline-block;
  font-family: serif;
  font-size: 32px;
  line-height: 1;
  font-style: normal;
  position: relative;
  top: 6px;
  left: -4px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

/*! Arrow Down */
.mbr-arrow {
  position: absolute;
  bottom: 45px;
  left: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: rgba(80, 80, 80, 0.5);
  border-radius: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.mbr-arrow > a {
  display: inline-block;
  text-decoration: none;
  outline-style: none;
  -webkit-animation: arrowdown 1.7s ease-in-out infinite;
  animation: arrowdown 1.7s ease-in-out infinite;
}

.mbr-arrow > a > i {
  position: absolute;
  top: -2px;
  left: 15px;
  font-size: 2rem;
}

@keyframes arrowdown {
  0% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
}

@-webkit-keyframes arrowdown {
  0% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }
}

@media (max-width: 500px) {
  .mbr-arrow-up {
    left: 50%;
    right: auto;
    transform: translateX(-50%) rotate(180deg);
    -webkit-transform: translateX(-50%) rotate(180deg);
  }
}

/*Gradients animation*/
@keyframes gradient-animation {
  from {
    background-position: 0% 100%;
    animation-timing-function: ease-in-out;
  }
  to {
    background-position: 100% 0%;
    animation-timing-function: ease-in-out;
  }
}

@-webkit-keyframes gradient-animation {
  from {
    background-position: 0% 100%;
    animation-timing-function: ease-in-out;
  }
  to {
    background-position: 100% 0%;
    animation-timing-function: ease-in-out;
  }
}

.bg-gradient {
  background-size: 200% 200%;
  animation: gradient-animation 5s infinite alternate;
  -webkit-animation: gradient-animation 5s infinite alternate;
}

.menu .navbar-brand {
  display: -webkit-flex;
}

.menu .navbar-brand span {
  display: flex;
  display: -webkit-flex;
}

.menu .navbar-brand .navbar-caption-wrap {
  display: -webkit-flex;
}

.menu .navbar-brand .navbar-logo img {
  display: -webkit-flex;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .menu .navbar-toggleable-sm .navbar-nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
  }
}

@media (max-width: 1023px) {
  .menu .navbar-collapse {
    max-height: 93.5vh;
  }
  .menu .navbar-collapse.show {
    overflow: auto;
  }
}

@media (min-width: 1024px) {
  .menu .navbar-nav.nav-dropdown {
    display: -webkit-flex;
  }
  .menu .navbar-toggleable-sm .navbar-collapse {
    display: -webkit-flex !important;
  }
  .menu .collapsed .navbar-collapse {
    max-height: 93.5vh;
  }
  .menu .collapsed .navbar-collapse.show {
    overflow: auto;
  }
}

@media (max-width: 767px) {
  .menu .navbar-collapse {
    max-height: 80vh;
  }
}

.navbar {
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  -webkit-align-items: center;
  -webkit-justify-content: space-between;
}

.navbar-collapse {
  -webkit-flex-basis: 100%;
  -webkit-flex-grow: 1;
  -webkit-align-items: center;
}

.nav-dropdown .link {
  padding: .667em 1.667em !important;
  margin: 0 !important;
}

.nav {
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
}

.row {
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
}

.justify-content-center {
  -webkit-justify-content: center;
}

.form-inline {
  display: -webkit-flex;
  -webkit-flex-flow: row wrap;
  -webkit-align-items: center;
}

.card-wrapper {
  -webkit-flex: 1;
}

.carousel-control {
  z-index: 10;
  display: -webkit-flex;
  -webkit-align-items: center;
  -webkit-justify-content: center;
}

.carousel-controls {
  display: -webkit-flex;
}

.media {
  display: -webkit-flex;
}

.form-group:focus {
  outline: none;
}

.jq-selectbox__select {
  padding: 1.07em .5em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.jq-selectbox__dropdown {
  position: absolute;
  top: 100% !important;
  left: 0 !important;
  width: 100% !important;
}

.jq-selectbox__trigger-arrow {
  transform: translateY(-50%);
}

.jq-selectbox li {
  padding: 1.07em .5em;
}

input[type="range"] {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.modal-dialog, .modal-content {
  height: 100%;
}

.modal-dialog .carousel-inner {
  height: 100%;
  height: -webkit-fill-available;
  height: fill-available;
}

.carousel-item {
  text-align: center;
}

.carousel-item img {
  margin: auto;
}
.engine {
	position: absolute;
	text-indent: -2400px;
	text-align: center;
	padding: 0;
	top: 0;
	left: -2400px;
}
