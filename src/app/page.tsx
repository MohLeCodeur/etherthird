"use client";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { createWallet } from "thirdweb/wallets";

// Créer le client Thirdweb
const client = createThirdwebClient({
  clientId: "c98a5d48ad89f114ad6044933fced541", // Remplace par ton ID client valide
});

// Spécifie uniquement Trust Wallet
const wallets = [
  createWallet("com.trustwallet.app"), // Trust Wallet seulement
];
import Link from 'next/link'
import Image from 'next/image';
export default function HomePage() {
    function setThemeMode(arg0: string): void {
        throw new Error('Function not implemented.');
    }

  return (
      <div className="d-flex flex-column min-vh-100">
          <section id="masterNoticeBar">
              <div id="banner-blockscan-wrapped" className="position-relative text-center py-3 overflow-hidden" style={{ background: 'linear-gradient(to right, #222 30%, #263D6C, #222 70%)' }}>
              <Image
  className="position-absolute start-0 end-0 opacity-10"
  style={{ top: '-0.2rem' }}
  src="/assets/svg/patterns/waves-parametric.svg"
  alt=""
  width={500} // Spécifiez la largeur réelle
  height={300} // Spécifiez la hauteur réelle
/>
                  <div className="container-xxl col-xl-10 col-xxl-8 position-relative">
                      <div className="d-flex align-items-center justify-content-center gap-1">
                      <Image
  width="16"
  height="16" // Ajoutez la hauteur appropriée
  src="/assets/svg/logos/blockscan-light-link.svg"
  alt="blockscan"
/>

                          <div className="text-white fw-medium mb-0">
                              Check your 2024 Onchain highlights with 
                              <a href="https://blockscan.com/wrapped" className="link-primary" target="_blank" style={{ color: '#8DD0EA' }}>Blockscan Wrapped <i className="far fa-arrow-up-right"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        
          <section id="masterTopBar" className="d-none d-lg-block sticky-top bg-white border-bottom py-1">
      <div className="container-xxl d-flex align-items-center justify-content-between">
        <div id="ethPrice" className="d-flex align-items-sm-center gap-4 w-100 fs-sm">
          <div className="text-muted">
            <span className="text-muted">ETH Price:</span>{' '}
            <Link href="/chart/etherprice.html">$3,586.57</Link>
            <span data-bs-toggle="tooltip" data-bs-placement="top" title="Changes in the last 24 hours">
              <span className="text-success"> (+3.60%)</span>
            </span>
          </div>
          <div className="text-muted">
            <i className="fad fa-gas-pump me-1"></i> Gas:{' '}
            <span id="spanGasTooltip" data-bs-toggle="tooltip" data-bs-html="true" title="Base Fee: 22.357 Gwei<br>Priority Fee: 0.054 Gwei">
              <Link href="/gastracker.html">
                <span className="gasPricePlaceHolder">22.411</span> Gwei
              </Link>
            </span>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center gap-2">
          {/* Dropdown for Feature Explainer */}
          <div id="divFeatureExplainer" className="dropdown d-none d-lg-block">
            <button
              className="btn btn-lg btn-white content-center p-0"
              type="button"
              id="dropdownTopbarFeatures"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: '2.375rem', height: '2.375rem' }}
            >
              <i className="far fa-book-open fa-fw"></i>
              <div
                id="divWithRoundCircle"
                className="position-absolute translate-middle bg-danger border border-light rounded-circle p-1 mt-n2 end-0"
              >
                <span className="visually-hidden">New alerts</span>
              </div>
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownTopbarFeatures" style={{ minWidth: '16rem', maxWidth: '20rem' }}>
              <div className="overflow-y-auto scrollbar-custom" style={{ maxHeight: '15rem' }}>
                <Link href="https://info.etherscan.com/site-settings/" className="dropdown-item d-flex align-items-baseline gap-1">
                  <i className="far fa-question-circle fa-fw"></i>
                  <div className="text-truncate">What can Site Settings be Used For?</div>
                </Link>
                <Link href="https://info.etherscan.com/optimized-search-bar/" className="dropdown-item d-flex align-items-baseline gap-1">
                  <i className="far fa-question-circle fa-fw"></i>
                  <div className="text-truncate">Using the Optimized Search Bar</div>
                </Link>
                <Link href="https://info.etherscan.com/navigating-the-etherscan-homepage/" className="dropdown-item d-flex align-items-baseline gap-1">
                  <i className="far fa-question-circle fa-fw"></i>
                  <div className="text-truncate">Navigating the Etherscan Homepage</div>
                </Link>
                <Link href="https://info.etherscan.com/etherscan-account-registration/" className="dropdown-item d-flex align-items-baseline gap-1">
                  <i className="far fa-question-circle fa-fw"></i>
                  <div className="text-truncate">How to Register for an Etherscan Account</div>
                </Link>
              </div>
              <hr className="dropdown-divider" />
              <Link href="https://info.etherscan.com/" className="dropdown-item d-flex align-items-baseline gap-1">
                <i className="far fa-book-open fa-fw"></i> All Knowledge Base articles
              </Link>
            </div>
          </div>

          {/* Dropdown for Theme Settings */}
          <div id="divThemeSetting" className="dropdown">
            <button
              className="btn btn-lg btn-white text-primary content-center"
              type="button"
              id="dropdownMenuTopbarSettings"
              data-bs-auto-close="outside"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: '2.375rem', height: '2.375rem' }}
            >
              <span className="theme-btn-main">
                <i className="far fa-sun-bright theme-icon-active" data-href="#fa-sun-bright"></i>
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuTopbarSettings">
              <li>
                <button type="button" className="dropdown-item theme-btn active" onClick={() => setThemeMode('light')}>
                  <i className="far fa-sun-bright fa-fw dropdown-item-icon theme-icon me-1" data-href="#fa-sun-bright"></i> Light
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item theme-btn" onClick={() => setThemeMode('dim')}>
                  <i className="far fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1" data-href="#fa-moon-stars"></i> Dim
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item theme-btn" onClick={() => setThemeMode('dark')}>
                  <i className="far fa-moon fa-fw dropdown-item-icon theme-icon me-1" data-href="#fa-moon"></i> Dark
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link href="/settings.html" className="dropdown-item">
                  <i className="far fa-gear fa-fw dropdown-item-icon me-1"></i> Site Settings <i className="far fa-arrow-right ms-1"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Dropdown for Networks */}
          <div id="divTestNet" className="dropdown">
            <button
              className="btn btn-lg btn-white content-center"
              type="button"
              id="dropdownTopbarNetworks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ width: '2.375rem', height: '2.375rem' }}
            >
              <Image width={10} height={10} src="/images/svg/brands/ethereum-original.svg" alt="Ethereum Logo" />
              <Image width={10} height={10} src="/images/svg/brands/ethereum-original-light.svg" alt="Ethereum Logo" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownTopbarNetworks">
              <li>
                <Link href="/index.html" id="LI_Mainnet" className="dropdown-item active">
                  Ethereum Mainnet
                </Link>
              </li>
              <li>
                <Link href="https://cn.etherscan.com/?lang=zh-CN" id="LI_Mainnet_CN" className="dropdown-item">
                  Ethereum Mainnet <span className="badge border bg-light text-dark ms-1">CN</span>
                </Link>
              </li>
              <li>
                <Link href="https://beaconscan.com/" id="LI2" className="dropdown-item">
                  Beaconscan <span className="badge border bg-light text-dark ms-1">ETH2</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link href="https://sepolia.etherscan.io/" id="LI9" className="dropdown-item">
                  Sepolia Testnet
                </Link>
              </li>
              <li>
                <Link href="https://holesky.etherscan.io/" id="A2" className="dropdown-item">
                  Holesky Testnet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <header id="masterHeader" className="header border-bottom d-print-none">
  <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-0">
    <div className="container-xxl position-relative">
      <a
        className="navbar-brand"
        href="index.html"
        target="_parent"
        aria-label="Etherscan"
      >
        <Image
          height={34.14}
          width={150}
          data-img-theme="light"
          src="/assets/svg/logos/logo-etherscanc1b6.svg"
          alt="Etherscan Logo"
        />
        <Image
          height={34.14}
          width={150}
          data-img-theme="darkmode"
          src="/assets/svg/logos/logo-etherscan-lightc1b6.svg"
          alt="Etherscan Logo"
        />
      </a>
      <div className="d-flex align-items-center gap-4">
        <a className="link-dark d-block d-lg-none" href="login.html">
          <i className="far fa-user-circle me-1" /> Sign In
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav gap-1 gap-lg-0 pt-4 pt-lg-0">
          <li className="nav-item">
            <a
              href="index.html"
              id="LI_default"
              className="nav-link active"
              aria-current="page"
            >
              Home
            </a>
          </li>
          {/* Blockchain */}
          <li className="nav-item dropdown">
            <a
              href="javascript:;"
              id="LI_blockchain"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blockchain
            </a>
            <ul
              className="dropdown-menu dropdown-menu-border"
              style={{ minWidth: "14rem" }}
            >
              <li>
                <a href="txs.html" id="LI12" className="dropdown-item">
                  Transactions
                </a>
              </li>
              <li>
                <a href="txsPending.html" id="LI16" className="dropdown-item">
                  Pending Transactions
                </a>
              </li>
              <li>
                <a href="txsInternal.html" id="LI14" className="dropdown-item">
                  Contract Internal Transactions
                </a>
              </li>
              <li>
                <a
                  href="txsBeaconDeposit.html"
                  id="LI22"
                  className="dropdown-item"
                >
                  Beacon Deposits
                </a>
              </li>
              <li>
                <a
                  href="txsBeaconWithdrawal.html"
                  id="LI_BeaconWithdrawals"
                  className="dropdown-item"
                >
                  Beacon Withdrawals
                </a>
              </li>
              <li>
                <a
                  href="txsBlobs.html"
                  id="LI_txsBlobs"
                  className="dropdown-item"
                >
                  View Blobs
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a href="blocks.html" id="LI_blocks" className="dropdown-item">
                  View Blocks
                </a>
              </li>
              <li>
                <a
                  href="blocks_forked.html"
                  id="LI_blocks2"
                  className="dropdown-item"
                >
                  Forked Blocks (Reorgs)
                </a>
              </li>
              <li>
                <a href="uncles.html" id="LI8" className="dropdown-item">
                  Uncles
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  href="accounts.html"
                  id="LI_accountall"
                  className="dropdown-item"
                >
                  Top Accounts
                </a>
              </li>
              <li>
                <a
                  href="contractsVerified.html"
                  id="LI_contract_verified"
                  className="dropdown-item"
                >
                  Verified Contracts
                </a>
              </li>
            </ul>
          </li>
          {/* End Blockchain */}
          {/* Tokens */}
          <li className="nav-item dropdown">
            <a
              href="javascript:;"
              id="LI_tokens"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tokens
            </a>
            <ul
              className="dropdown-menu dropdown-menu-border"
              style={{ minWidth: "14rem" }}
            >
              <li>
                <a href="tokens.html" id="LI21" className="dropdown-item">
                  Top Tokens <span className="small text-muted">(ERC-20)</span>
                </a>
              </li>
              <li>
                <a href="tokentxns.html" id="LI1" className="dropdown-item">
                  Token Transfers{" "}
                  <span className="small text-muted">(ERC-20)</span>
                </a>
              </li>
            </ul>
          </li>
          {/* End Tokens */}
          {/* NFTs */}
          <li className="nav-item dropdown">
            <a
              href="javascript:;"
              id="LI_Nfts"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              NFTs
            </a>
            <ul
              className="dropdown-menu dropdown-menu-border"
              style={{ minWidth: "14rem" }}
            >
              <li>
                <a
                  href="nft-top-contracts.html"
                  id="LI63"
                  className="dropdown-item"
                >
                  Top NFTs
                </a>
              </li>
              <li>
                <a
                  href="nft-top-mints.html"
                  id="LI67"
                  className="dropdown-item"
                >
                  Top Mints
                </a>
              </li>
              <li>
                <a href="nft-trades.html" id="LI64" className="dropdown-item">
                  Latest Trades
                </a>
              </li>
              <li>
                <a
                  href="nft-transfers.html"
                  id="LI65"
                  className="dropdown-item"
                >
                  Latest Transfers
                </a>
              </li>
              <li>
                <a
                  href="nft-latest-mints.html"
                  id="LI66"
                  className="dropdown-item"
                >
                  Latest Mints
                </a>
              </li>
            </ul>
          </li>
          {/* End NFTs */}
          {/* Defi */}
          {/* End Defi */}
          {/* Resrouces */}
          <li className="nav-item dropdown">
            <a
              href="javascript:;"
              id="LI_resources"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Resources
            </a>
            <ul
              className="dropdown-menu dropdown-menu-border"
              style={{ minWidth: "14rem" }}
            >
              <li>
                <a href="charts.html" id="LI_charts2" className="dropdown-item">
                  Charts And Stats
                </a>
              </li>
              <li>
                <a
                  href="topstat.html"
                  id="LI_topstat"
                  className="dropdown-item"
                >
                  Top Statistics
                </a>
              </li>
              <li>
                <a
                  href="leaderboard/advanced-filter.html"
                  id="LI_Leaderboard"
                  className="dropdown-item"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a href="directory.html" id="LI62" className="dropdown-item">
                  Directory
                </a>
              </li>
              <li>
                <a
                  href="https://info.etherscan.com/newsletters/"
                  id="LI60"
                  className="dropdown-item"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="https://info.etherscan.com/"
                  id="LI61"
                  className="dropdown-item"
                >
                  Knowledge Base
                </a>
              </li>
            </ul>
          </li>
          {/* End Resrouces */}
          {/* Developers */}
          <li className="nav-item dropdown">
            <a
              href="#"
              id="li_developers"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Developers
            </a>
            <ul
              className="dropdown-menu dropdown-menu-border"
              style={{ minWidth: "14rem" }}
            >
              <li>
                <a href="apis.html" id="LI5" className="dropdown-item">
                  API Plans
                </a>
              </li>
              <li>
                <a
                  href="https://docs.etherscan.io/etherscan-v2"
                  id="LI6"
                  className="dropdown-item"
                  target="_blank"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a href="code-reader.html" id="A1" className="dropdown-item">
                  Code Reader{" "}
                  <span className="badge border bg-light text-muted">Beta</span>
                </a>
              </li>
              <li>
                <a
                  href="verifyContract.html"
                  id="LI17"
                  className="dropdown-item"
                >
                  Verify Contract
                </a>
              </li>
              <li>
                <a
                  href="find-similar-contracts.html"
                  id="LI55"
                  className="dropdown-item"
                >
                  Similar Contract Search
                </a>
              </li>
              <li>
                <a
                  href="searchcontract.html"
                  id="LI53"
                  className="dropdown-item"
                >
                  Smart Contract Search
                </a>
              </li>
              <li>
                <a
                  href="contractdiffchecker.html"
                  id="LI54"
                  className="dropdown-item"
                >
                  Contract Diff Checker
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a href="vyper.html" id="LI27" className="dropdown-item">
                  Vyper Online Compiler
                </a>
              </li>
              <li>
                <a href="opcode-tool.html" id="LI24" className="dropdown-item">
                  Bytecode to Opcode
                </a>
              </li>
              <li>
                <a href="pushTx.html" id="LI10" className="dropdown-item">
                  Broadcast Transaction
                </a>
              </li>
            </ul>
          </li>
          {/* End Developers */}
          {/* More */}
          <li className="nav-item dropdown position-initial">
            <a
              href="javascript:;"
              id="LI_services2"
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <div className="dropdown-menu dropdown-menu-border dropdown-menu-mega">
              <div className="row">
                <div className="col-lg order-last order-lg-first">
                  <div className="d-flex flex-column bg-light h-100 rounded-3 p-5">
                    <div>
                      <h6>Tools &amp; Services</h6>
                      <p>
                        Discover more of Etherscans tools and services in one
                        place.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="text-muted mb-2">Sponsored</p>
                      <a target="_blank" href="https://chat.blockscan.com/">
                        <Image
                          height={140}
                          width={140}
                          data-img-theme="light"
                          src="/images/svg/blockscan-logo-lightc1b6.svg?v=0.0.5"
                          alt=""
                        />
                        <Image
                          height={140}
                          width={140}
                          data-img-theme="dim"
                          src="/images/svg/blockscan-logo-darkc1b6.svg?v=0.0.5"
                          alt=""
                        />
                        <Image
                          height={140}
                          width={140}
                          data-img-theme="dark"
                          src="/images/svg/blockscan-logo-darkc1b6.svg?v=0.0.5"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm py-5">
                  <h6 className="px-3 mb-3">Tools</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="inputdatadecoder.html"
                        id="LI86"
                        className="dropdown-item"
                      >
                        <i className="far fa-file-binary dropdown-item-icon fa-fw me-1" />
                        Input Data Decoder{" "}
                        <span className="badge border bg-light text-muted">
                          Beta
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="unitconverter.html"
                        id="LI50"
                        className="dropdown-item"
                      >
                        <i className="far fa-arrows-rotate dropdown-item-icon fa-fw me-1" />
                        Unit Converter
                      </a>
                    </li>
                    <li>
                      <a
                        href="exportData.html"
                        id="LI51"
                        className="dropdown-item"
                      >
                        <i className="far fa-download fa-fw me-1" />
                        CSV Export
                      </a>
                    </li>
                    <li>
                      <a
                        href="balancecheck-tool.html"
                        id="LI52"
                        className="dropdown-item"
                      >
                        <i className="far fa-file-invoice-dollar fa-fw me-1" />
                        Account Balance Checker
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm py-5">
                  <h6 className="px-3 mb-3">Explore</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="gastracker.html"
                        id="LI19"
                        className="dropdown-item"
                      >
                        <i className="far fa-gas-pump dropdown-item-icon fa-fw me-1" />
                        Gas Tracker
                      </a>
                    </li>
                    <li>
                      <a href="dex.html" id="LI4" className="dropdown-item">
                        <i className="far fa-arrow-right-arrow-left dropdown-item-icon fa-fw me-1" />
                        DEX Tracker
                      </a>
                    </li>
                    <li>
                      <a
                        href="nodetracker.html"
                        id="LI46"
                        className="dropdown-item"
                      >
                        <i className="far fa-server dropdown-item-icon fa-fw me-1" />
                        Node Tracker
                      </a>
                    </li>
                    <li>
                      <a
                        href="labelcloud.html"
                        id="LI41"
                        className="dropdown-item"
                      >
                        <i className="far fa-signs-post dropdown-item-icon fa-fw me-1" />
                        Label Cloud
                      </a>
                    </li>
                    <li>
                      <a
                        href="name-lookup.html"
                        id="LI26"
                        className="dropdown-item"
                      >
                        <i className="far fa-magnifying-glass-chart dropdown-item-icon fa-fw me-1" />
                        Domain Name Lookup
                      </a>
                    </li>
                    <li>
                      <a
                        href="txsAA.html"
                        id="LITxsAA"
                        className="dropdown-item"
                      >
                        <i className="far fa-rectangle-vertical-history dropdown-item-icon fa-fw me-1" />
                        AA Transactions{" "}
                        <span className="badge border bg-light text-muted">
                          Beta
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="txsAABundle.html"
                        id="LITxsAABundle"
                        className="dropdown-item"
                      >
                        <i className="far fa-rectangle-vertical-history dropdown-item-icon fa-fw me-1" />
                        AA Bundle Transactions{" "}
                        <span className="badge border bg-light text-muted">
                          Beta
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm py-5">
                  <h6 className="px-3 mb-3">Services</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="tokenapprovalchecker.html"
                        id="LI49"
                        className="dropdown-item"
                      >
                        <i className="far fa-shield-keyhole dropdown-item-icon fa-fw me-1" />
                        Token Approvals{" "}
                        <span className="badge border bg-light text-muted">
                          Beta
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="verifiedSignatures.html"
                        id="LI29"
                        className="dropdown-item"
                      >
                        <i className="far fa-signature-lock dropdown-item-icon fa-fw me-1" />
                        Verified Signature
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="idm.html">
                        <i className="far fa-message-lines dropdown-item-icon fa-fw me-1" />
                        Input Data Messages (IDM){" "}
                        <span className="badge border bg-light text-muted">
                          Beta
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="advanced-filter.html"
                        id="LI31"
                        className="dropdown-item"
                      >
                        <i className="far fa-filters dropdown-item-icon fa-fw me-1" />
                        Advanced Filter{" "}
                        <span className="badge border bg-light text-muted">
                          Beta
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://chat.blockscan.com/"
                        target="_blank"
                      >
                        <i className="far fa-messages dropdown-item-icon fa-fw me-1" />
                        Blockscan Chat{" "}
                        <i className="far fa-arrow-up-right-from-square text-muted ms-1" />{" "}
                        <span className="badge border bg-light text-muted">
                          Beta
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* End More */}
          <li className="nav-item dropdown d-block d-lg-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Explorers
            </a>
            <ul
              className="dropdown-menu dropdown-menu-border"
              style={{ minWidth: "14rem" }}
            >
              <li>
                <a
                  href="index.html"
                  id="LI_Mainnet_1"
                  className="dropdown-item active active active"
                >
                  Ethereum Mainnet
                </a>
              </li>
              <li>
                <a
                  href="https://cn.etherscan.com/?lang=zh-CN"
                  id="LI_Mainnet_CN_1"
                  className="dropdown-item"
                >
                  Ethereum Mainnet{" "}
                  <span className="badge border bg-light text-dark ms-1">
                    CN
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://beaconscan.com/"
                  id="LI77"
                  className="dropdown-item"
                >
                  Beaconscan{" "}
                  <span className="badge border bg-light text-dark ms-1">
                    ETH2
                  </span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  href="https://goerli.etherscan.io/"
                  id="LI78"
                  className="dropdown-item"
                >
                  Goerli Testnet
                </a>
              </li>
              <li>
                <a
                  href="https://sepolia.etherscan.io/"
                  id="LI79"
                  className="dropdown-item"
                >
                  Sepolia Testnet
                </a>
              </li>
              <li>
                <a
                  href="https://holesky.etherscan.io/"
                  id="A4"
                  className="dropdown-item"
                >
                  Holesky Testnet
                </a>
              </li>
            </ul>
          </li>
          {/* Appearance & Settings */}
          <li className="nav-item dropdown d-block d-lg-none">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Appearance &amp; Settings
            </a>
            <ul
              className="dropdown-menu dropdown-menu-border"
              style={{ minWidth: "14rem" }}
            >
              <li>
              <button
    type="button"
    className="dropdown-item theme-btn active"
    data-bs-theme-value="light"
    onClick={() => setThemeMode('light')}
  >
                  <i
                    className="far fa-sun-bright fa-fw dropdown-item-icon theme-icon me-1"
                    data-href="#fa-sun-bright"
                  />{" "}
                  Light
                </button>
              </li>
              <li>
              <button
    type="button"
    className="dropdown-item theme-btn"
    data-bs-theme-value="dim"
    onClick={() => setThemeMode('dim')}
  >
                  <i
                    className="far fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1"
                    data-href="#fa-moon-stars"
                  />{" "}
                  Dim
                </button>
              </li>
              <li>
              <button
    type="button"
    className="dropdown-item theme-btn"
    data-bs-theme-value="dark"
    onClick={() => setThemeMode('dark')}
  >
                  <i
                    className="far fa-moon-stars fa-fw dropdown-item-icon theme-icon me-1"
                    data-href="#fa-moon"
                  />{" "}
                  Dark
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="settings.html">
                  <i className="far fa-gear fa-fw dropdown-item-icon me-1" />{" "}
                  Site Settings <i className="far fa-arrow-right ms-1" />
                </a>
              </li>
            </ul>
          </li>
          {/* End Appearance & Settings */}
          <li className="nav-item align-self-center d-none d-lg-block">
            <span className="text-secondary">|</span>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a className="nav-link" href="login.html">
              <i className="far fa-user-circle me-1" /> Sign In
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
<main id="content" className="main-content" role="main">
  <input type="hidden" name="hdnAgeText" id="hdnAgeText" defaultValue="Age" />
  <input
    type="hidden"
    name="hdnDateTimeText"
    id="hdnDateTimeText"
    defaultValue="Date Time (UTC)"
  />
  <input
    type="hidden"
    name="hdnAgeTitle"
    id="hdnAgeTitle"
    defaultValue="Click to show Age Format"
  />
  <input
    type="hidden"
    name="hdnDateTimeTitle"
    id="hdnDateTimeTitle"
    defaultValue="Click to show Datetime Format"
  />
  <input
    type="hidden"
    name="hdnTxnText"
    id="hdnTxnText"
    defaultValue="Txn Fee"
  />
  <input
    type="hidden"
    name="hdnGasPriceText"
    id="hdnGasPriceText"
    defaultValue="Gas Price"
  />
  <input
    type="hidden"
    name="hdnTxnFeeTitle"
    id="hdnTxnFeeTitle"
    defaultValue="(Gas Price * Gas Used by Txns) in Ether"
  />
  <input
    type="hidden"
    name="hdnGasPriceTitle"
    id="hdnGasPriceTitle"
    defaultValue="Gas Price in Gwei"
  />
  <div id="mainOverlay" className="bg-white bg-opacity-40" />
  <section
    className="bg-dark pt-14 pb-20"
    style={{ backgroundImage: "url(images/svg/waves-light.svg)" }}
  >
    <div className="container-xxl">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-9 col-lg-7 mb-5">
          <h1 className="fs-lg text-white fw-medium mb-3">
            The Ethereum Blockchain Explorer
          </h1>
          <form
            className="mb-3"
            action="https://etherscan.io/search"
            method="GET"
          >
            <div className="search-panel-container bg-white border rounded d-flex gap-2 p-1.5">
              {/* Search Filter */}
              <div className="d-none d-sm-block">
                <select
                  name="f"
                  className="form-select fs-base border-0 filterby"
                  aria-label="Default select example"
                >
                  <option value={0}>
                    All Filters
                  </option>
                  <option value={1}>Addresses</option>
                  <option value={2}>Tokens</option>
                  <option value={3}>Name Tags</option>
                  <option value={6}>Domain Names</option>
                  <option value={4}>Labels</option>
                  <option value={5}>Websites</option>
                </select>
              </div>
              {/* End Search Filter */}
              {/* Search Box */}
              <div className="flex-grow-1 position-relative auto-search-max-height">
                <label htmlFor="search-panel" className="visually-hidden">
                  Search
                </label>
                <input
                  id="search-panel"
                  type="text"
                  className="form-control fs-base border-0 pe-8"
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                  aria-describedby="button-header-search"
                  name="q"
                 
                  maxLength={68}
                />
                <a
                  href="javascript:;"
                  className="clear-icon d-none align-items-center position-absolute top-0 bottom-0 my-auto d-flex align-items-center"
                  style={{ right: "0.75rem", cursor: "pointer" }}
                >
                  <i className="fa-regular fa-xmark fs-5 text-secondary" />
                </a>
                <input type="hidden" defaultValue="" id="hdnSearchText" />
                <input type="hidden" defaultValue="" id="hdnSearchLabel" />
                <input id="hdnIsTestNet" defaultValue="False" type="hidden" />
              </div>
              <div>
                <button className="btn fs-base btn-primary" type="submit">
                  <i className="far fa-magnifying-glass" />
                </button>
              </div>
              {/* End Search Box */}
            </div>
          </form>
          {/* Text Ads */}
          <p
            className="text-white text-opacity-75 mb-0 noindex-section"
            style={{ minHeight: 22 }}
          
            
            content="noindex, nofollow"
          >
            {/* Revive Adserver Anti Adblocker Asynchronous JS Tag - Generated with Revive Adserver v5.5.2 */}
            <ins
              dgpz-t8xt5pt6kr-em9uzwlk={6}
              dgpz-t8xt5pt6kr-id="033e0828aecd8a15c31181716c4b1552"
            />
          </p>
          {/* End Text Ads */}
        </div>
        {/* Banners */}
        <div
          className="col-auto mx-auto noindex-section"
       
       
          content="noindex, nofollow"
        >
          <div className="d-none d-lg-flex justify-content-center mt-n4">
            <a
              className="position-relative d-inline-block d-sm-none"
              target="_blank"
              href="https://moonpay-affiliate-program.sjv.io/GmG56B"
              rel="nofollow"
            >
              <span
                className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                style={{ right: ".75rem", top: "-.5rem" }}
              >
                Ad
              </span>
              <Image
                className="img-fluid rounded"
                width={321}
                height={101}
                src="/images/gen/moonpay_etherscan_dec24_321x101.png"
                alt="Ads"
              />
            </a>
            <a
              className="position-relative d-none d-sm-inline-block d-lg-none"
              target="_blank"
              href="https://moonpay-affiliate-program.sjv.io/GmG56B"
              rel="nofollow"
            >
              <span
                className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                style={{ right: ".75rem", top: "-.5rem" }}
              >
                Ad
              </span>
              <Image
                className="img-fluid rounded"
                width={730}
                height={90}
                src="/images/gen/moonpay_etherscan_dec24_730x90.png"
                alt="Ads"
              />
            </a>
            <a
              className="position-relative d-none d-lg-inline-block"
              target="_blank"
              href="https://moonpay-affiliate-program.sjv.io/GmG56B"
              rel="nofollow"
            >
              <span
                className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
                style={{ right: ".75rem", top: "-.5rem" }}
              >
                Ad
              </span>
              <Image
                className="img-fluid rounded"
                width={321}
                height={101}
                src="/images/gen/moonpay_etherscan_dec24_321x101.png"
                alt="Ads"
              />
            </a>
          </div>
        </div>
        {/* End Banners */}
      </div>
    </div>
    <div style={{ marginLeft: 110 }}>
      {/* Bouton Connect de Thirdweb */}
      <ConnectButton client={client} wallets={wallets} />
    </div>
  </section>
  
  <section className="container-xxl pb-20">
    {/* Stats */}
    <div
      id="ContentPlaceHolder1_mainboxes"
      className="card py-5 px-4 mb-4 mt-n12"
    >
      <div className="row g-lg-10">
        <div className="col-md-6 col-lg-4">
          {/* Eth Price */}
          <div className="d-flex">
            <div className="text-center me-3" style={{ width: "1.5rem" }}>
              <Image
                className="img-fluid mx-auto"
                height={18}
                width={18}
                data-img-theme="light"
                src="/images/svg/brands/ethereum-original.svg"
                alt="Ethereum Logo"
              />
              <Image
                className="img-fluid mx-auto"
                height={18}
                width={18}
                data-img-theme="darkmode"
                src="/images/svg/brands/ethereum-original-light.svg"
                alt="Ethereum Logo"
              />
            </div>
          

            <div className="flex-grow-1">
              <div className="text-cap mb-px">Ether Price</div>
              <a
                className="link-dark fs-base"
                href="chart/etherprice.html"
                rel="tooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="View Historical Ether Price"
              >
                $3,586.57<span className="text-muted"> @ 0.036518 BTC</span>
                <span className="text-success small"> (+3.60%)</span>
              </a>
            </div>
          </div>
          {/* End Eth Price */}
          <hr className="my-5" />
          <div className="d-flex">
            <div className="me-3">
              <i className="fal fa-globe" style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="flex-grow-1">
              <div className="text-cap mb-px">Market Cap</div>
              <a className="link-dark fs-base" href="stat/supply.html">
                $432,093,843,841.00
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 border-md-start">
          <hr className="d-block d-md-none my-5" />
          <div className="d-flex">
            <div className="me-3">
              <i className="fal fa-server" style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="flex-grow-1">
              <div className="text-cap mb-px">Transactions</div>
              <a
                href="txs.html"
                className="link-dark fs-base"
                rel="tooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-html="true"
                title="Total Transactions Counter<br>(Update every 5 mins)"
              >
                2,642.77 M
              </a>
              <span
                className="text-muted small"
                style={{ fontSize: 14 }}
                rel="tooltip"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Transactions per Second"
              >
                {" "}
                (15.3 TPS)
              </span>
            </div>
            <div className="text-end">
              <div className="text-cap mb-px">Med Gas Price</div>
              <a
                href="gastracker.html"
                className="link-dark fs-base"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                title="Base Fee: 22.357 Gwei<br>Priority Fee: 0.054 Gwei"
              >
                22.411 Gwei{" "}
                <span className="text-muted small" style={{ fontSize: 14 }}>
                  ($1.69)
                </span>
              </a>
            </div>
          </div>
          <hr className="my-5" />
          <div className="d-flex">
            <div className="me-3">
              <i className="fal fa-gauge" style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="flex-grow-1">
              <div className="text-cap mb-px">Last Finalized Block</div>
              <span
                rel="tooltip"
                className="fs-base"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="This block is finalized and cannot be reverted without slashing at least 1/3 of all validators"
                
              >
                21545632
              </span>
            </div>
            <div className="text-end">
              <div className="text-cap mb-px">Last Safe Block</div>
              <span
                rel="tooltip"
                className="fs-base"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="This block is finalized and cannot be reverted without slashing at least 1/3 of all validators"
              >
                21545632
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 border-lg-start">
          <hr className="d-block d-lg-none my-5" />
          <div className="text-cap mb-px">Transaction History in 14 days</div>
          <div
            id="container-1"
            className="w-100 pt-2"
            style={{ height: 105 }}
          />
        </div>
      </div>
    </div>
    {/* End Stats */}
    {/* Banners */}
    <div
      className="d-flex d-lg-none justify-content-center mb-4 noindex-section"
      
      
      content="noindex, nofollow"
    >
      <a
        className="position-relative d-inline-block d-sm-none"
        target="_blank"
        href="https://moonpay-affiliate-program.sjv.io/GmG56B"
        rel="nofollow"
      >
        <span
          className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
          style={{ right: ".75rem", top: "-.5rem" }}
        >
          Ad
        </span>
        <Image
          className="img-fluid rounded"
          width={321}
          height={101}
          src="/images/gen/moonpay_etherscan_dec24_321x101.png"
          alt="Ads"
        />
      </a>
      <a
        className="position-relative d-none d-sm-inline-block d-lg-none"
        target="_blank"
        href="https://moonpay-affiliate-program.sjv.io/GmG56B"
        rel="nofollow"
      >
        <span
          className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
          style={{ right: ".75rem", top: "-.5rem" }}
        >
          Ad
        </span>
        <Image
          className="img-fluid rounded"
          width={730}
          height={90}
          src="/images/gen/moonpay_etherscan_dec24_730x90.png"
          alt="Ads"
        />
      </a>
      <a
        className="position-relative d-none d-lg-inline-block"
        target="_blank"
        href="https://moonpay-affiliate-program.sjv.io/GmG56B"
        rel="nofollow"
      >
        <span
          className="position-absolute bg-white text-dark shadow-sm rounded-1 small px-1"
          style={{ right: ".75rem", top: "-.5rem" }}
        >
          Ad
        </span>
        <Image
          className="img-fluid rounded"
          width={321}
          height={101}
          src="/images/gen/moonpay_etherscan_dec24_321x101.png"
          alt="Ads"
        />
      </a>
    </div>
    {/* End Banners */}
    {/* Custom Cards */}
    <div className="row gx-4" id="cardsWrapper">
      <div id="cardSpinnerWrapper">
        {/* Spinner */}
        <div id="cardSpinner" className="text-center py-10 ">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="small text-muted mt-1">Loading</div>
        </div>
        {/* End Spinner */}
      </div>
      {/* Card 1 */}
      <div className="col-lg-6 mb-4">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center gap-1">
              <h2 className="card-header-title">Latest Blocks</h2>
              <button
                type="button"
                id="card1AdvancedFilterListButton"
                className="btn btn-sm btn-ghost-white d-none"
                data-bs-toggle="modal"
                data-bs-target="#advancedFilterListModal"
                data-bs-card-index={1}
              >
                <i className="far fa-pen-to-square fa-fw" />
              </button>
            </div>
            <button
              id="ContentPlaceHolder1_btnCustomizeCard1"
              type="button"
              className="btn btn-sm btn-white"
              data-bs-toggle="modal"
              data-bs-target="#customizeCardModal"
              data-bs-card-index={1}
            >
              <i className="far fa-grid-2 me-1" />
              Customize
            </button>
          </div>
          <div
            className="card-body overflow-auto scrollbar-custom "
            style={{ maxHeight: "30.3rem" }}
            id="mCSB_1_container"
          >
            <div className="row">
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-cube fs-lg" />
                  </div>
                  <div className="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">Block</span>
                    <a
                      className="text-truncate"
                      style={{ maxWidth: "6rem" }}
                      href="block/21545704.html"
                    >
                      21545704
                    </a>
                    <div className="small text-muted"> 9 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    Miner{" "}
                    <a
                      data-highlight-value=""
                      className="text-truncate d-block"
                      style={{ maxWidth: "8rem" }}
                      href="address/0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5"
                      >
                        beaverbuild
                      </span>
                    </a>
                  </div>
                  <a
                    href="txsfe3f.html?block=21545704"
                    data-bs-toggle="tooltip"
                    title="Transactions in this Block"
                  >
                    171 txns{" "}
                  </a>{" "}
                  <span className="small text-muted me-2">in 12 secs</span>
                  <span
                    className="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>10577 Eth
                  </span>
                </div>
                <div className="d-none d-sm-block text-end ms-2 ms-sm-0">
                  <span
                    className="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>10577 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-cube fs-lg" />
                  </div>
                  <div className="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">Block</span>
                    <a
                      className="text-truncate"
                      style={{ maxWidth: "6rem" }}
                      href="block/21545703.html"
                    >
                      21545703
                    </a>
                    <div className="small text-muted"> 21 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    Miner{" "}
                    <a
                      data-highlight-value=""
                      href="address/0x0376f7ec14a08556b1df2491138faab33d065dd1.html"
                      className="d-flex align-items-center"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x0376f7ec14a08556b1df2491138faab33d065dd1"
                      >
                        <span data-highlight-target="0x0376f7ec14a08556B1DF2491138FAab33D065DD1">
                          0x0376f7ec...33D065DD1
                        </span>
                      </span>
                    </a>
                  </div>
                  <a
                    href="txsbf20.html?block=21545703"
                    data-bs-toggle="tooltip"
                    title="Transactions in this Block"
                  >
                    64 txns{" "}
                  </a>{" "}
                  <span className="small text-muted me-2">in 12 secs</span>
                  <span
                    className="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>00718 Eth
                  </span>
                </div>
                <div className="d-none d-sm-block text-end ms-2 ms-sm-0">
                  <span
                    className="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>00718 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-cube fs-lg" />
                  </div>
                  <div className="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">Block</span>
                    <a
                      className="text-truncate"
                      style={{ maxWidth: "6rem" }}
                      href="block/21545702.html"
                    >
                      21545702
                    </a>
                    <div className="small text-muted"> 33 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    Miner{" "}
                    <a
                      data-highlight-value=""
                      className="text-truncate d-block"
                      style={{ maxWidth: "8rem" }}
                      href="address/0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97"
                      >
                        Titan Builder
                      </span>
                    </a>
                  </div>
                  <a
                    href="txs9230.html?block=21545702"
                    data-bs-toggle="tooltip"
                    title="Transactions in this Block"
                  >
                    272 txns{" "}
                  </a>{" "}
                  <span className="small text-muted me-2">in 12 secs</span>
                  <span
                    className="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>11268 Eth
                  </span>
                </div>
                <div className="d-none d-sm-block text-end ms-2 ms-sm-0">
                  <span
                    className="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>11268 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-cube fs-lg" />
                  </div>
                  <div className="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">Block</span>
                    <a
                      className="text-truncate"
                      style={{ maxWidth: "6rem" }}
                      href="block/21545701.html"
                    >
                      21545701
                    </a>
                    <div className="small text-muted"> 45 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    Miner{" "}
                    <a
                      data-highlight-value=""
                      className="text-truncate d-block"
                      style={{ maxWidth: "8rem" }}
                      href="address/0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5"
                      >
                        beaverbuild
                      </span>
                    </a>
                  </div>
                  <a
                    href="txs49e4.html?block=21545701"
                    data-bs-toggle="tooltip"
                    title="Transactions in this Block"
                  >
                    120 txns{" "}
                  </a>{" "}
                  <span className="small text-muted me-2">in 12 secs</span>
                  <span
                    className="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>08344 Eth
                  </span>
                </div>
                <div className="d-none d-sm-block text-end ms-2 ms-sm-0">
                  <span
                    className="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>08344 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-cube fs-lg" />
                  </div>
                  <div className="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">Block</span>
                    <a
                      className="text-truncate"
                      style={{ maxWidth: "6rem" }}
                      href="block/21545700.html"
                    >
                      21545700
                    </a>
                    <div className="small text-muted"> 57 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    Miner{" "}
                    <a
                      data-highlight-value=""
                      className="text-truncate d-block"
                      style={{ maxWidth: "8rem" }}
                      href="address/0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97"
                      >
                        Titan Builder
                      </span>
                    </a>
                  </div>
                  <a
                    href="txseeff.html?block=21545700"
                    data-bs-toggle="tooltip"
                    title="Transactions in this Block"
                  >
                    172 txns{" "}
                  </a>{" "}
                  <span className="small text-muted me-2">in 12 secs</span>
                  <span
                    className="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>09295 Eth
                  </span>
                </div>
                <div className="d-none d-sm-block text-end ms-2 ms-sm-0">
                  <span
                    className="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>09295 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-cube fs-lg" />
                  </div>
                  <div className="d-flex flex-row flex-sm-column align-items-center align-items-sm-start gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">Block</span>
                    <a
                      className="text-truncate"
                      style={{ maxWidth: "6rem" }}
                      href="block/21545699.html"
                    >
                      21545699
                    </a>
                    <div className="small text-muted"> 1 min ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 d-flex justify-content-sm-between align-items-end align-items-sm-center position-relative">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    Miner{" "}
                    <a
                      data-highlight-value=""
                      className="text-truncate d-block"
                      style={{ maxWidth: "8rem" }}
                      href="address/0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97"
                      >
                        Titan Builder
                      </span>
                    </a>
                  </div>
                  <a
                    href="txs780c.html?block=21545699"
                    data-bs-toggle="tooltip"
                    title="Transactions in this Block"
                  >
                    221 txns{" "}
                  </a>{" "}
                  <span className="small text-muted me-2">in 12 secs</span>
                  <span
                    className="d-inline-block d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1 py-sm-1.5 px-1.5 px-sm-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>06109 Eth
                  </span>
                </div>
                <div className="d-none d-sm-block text-end ms-2 ms-sm-0">
                  <span
                    className="badge border border-dark dark:border-white border-opacity-15 text-dark fw-medium py-1.5 px-2"
                    data-bs-toggle="tooltip"
                    title="Block Reward"
                  >
                    0<b>.</b>06109 Eth
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a
            className="card-footer bg-light fw-medium text-cap link-muted text-center"
            href="blocks.html"
          >
            View all blocks
            <i className="far fa-long-arrow-right ms-1" />
          </a>
        </div>
      </div>
      {/* End Card 1 */}
      {/* Card 2 */}
      <div className="col-lg-6 mb-4">
        <div className="card h-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center gap-1">
              <h2 className="card-header-title">Latest Transactions</h2>
              <button
                type="button"
                id="card2AdvancedFilterListButton"
                className="btn btn-sm btn-ghost-white d-none"
                data-bs-toggle="modal"
                data-bs-target="#advancedFilterListModal"
                data-bs-card-index={2}
              >
                <i className="far fa-pen-to-square fa-fw" />
              </button>
            </div>
            <button
              id="ContentPlaceHolder1_btnCustomizeCard2"
              type="button"
              className="btn btn-sm btn-white"
              data-bs-toggle="modal"
              data-bs-target="#customizeCardModal"
              data-bs-card-index={2}
            >
              <i className="far fa-grid-2 me-1" />
              Customize
            </button>
          </div>
          <div
            className="card-body overflow-auto scrollbar-custom "
            style={{ maxHeight: "30.3rem" }}
            id="mCSB_2_container"
          >
            <div className="row">
              <div className="col-sm-4 col-lg-5">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-memo fs-lg" />
                  </div>
                  <div className="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">TX#</span>
                    <a
                      className="d-block text-truncate"
                      style={{ maxWidth: "7rem" }}
                      href="tx/0x261a9ebfbfc69e9c96f4a7f10a481437a610569a153faef50aed620c42a15c1c.html"
                    >
                      0x261a9ebfbfc69e9c96f4a7f10a481437a610569a153faef50aed620c42a15c1c
                    </a>
                    <div className="small text-muted">9 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    From{" "}
                    <a
                      data-highlight-value=""
                      className="d-inline-flex align-items-center"
                      href="address/0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5"
                      >
                        <span data-highlight-target="0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5">
                          0x95222290...5CC4BAfe5
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-1">
                    To{" "}
                    <a
                      data-highlight-value=""
                      href="address/0xf84aab3d91b251b468ac3d7536d5beaa1c1f61d2.html"
                      className="d-inline-flex align-items-center"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0xf84aab3d91b251b468ac3d7536d5beaa1c1f61d2"
                      >
                        <span data-highlight-target="0xf84aAB3D91B251b468ac3d7536D5BeAA1c1f61d2">
                          0xf84aAB3D...A1c1f61d2
                        </span>
                      </span>
                    </a>
                    <span className="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">
                      0<b>.</b>11291 Eth
                    </span>
                  </div>
                </div>
                <div
                  className="d-none d-sm-block text-end ms-2 ms-sm-0"
                  data-bs-toggle="tooltip"
                  title="Amount"
                >
                  <span className="badge border border-dark dark:border-white border-opacity-15 text-dark  py-1.5 px-2 fw-medium">
                    0<b>.</b>11291 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4 col-lg-5">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-memo fs-lg" />
                  </div>
                  <div className="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">TX#</span>
                    <a
                      className="d-block text-truncate"
                      style={{ maxWidth: "7rem" }}
                      href="tx/0x935ef1bad9438781f07ed743ba6939a00d2e9ffae76406e1c7e52cc3c9819bcc.html"
                    >
                      0x935ef1bad9438781f07ed743ba6939a00d2e9ffae76406e1c7e52cc3c9819bcc
                    </a>
                    <div className="small text-muted">9 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    From{" "}
                    <a
                      data-highlight-value=""
                      className="d-inline-flex align-items-center"
                      href="address/0xb702dde37508fc3c8e13611f98e6dacfbee8249d.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0xb702dde37508fc3c8e13611f98e6dacfbee8249d"
                      >
                        <span data-highlight-target="0xb702dDe37508FC3C8e13611F98e6dACfBee8249D">
                          0xb702dDe3...fBee8249D
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-1">
                    To{" "}
                    <a
                      data-highlight-value=""
                      href="address/0xd217b55292c492388632c474420ee82e954b393b.html"
                      className="d-inline-flex align-items-center"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0xd217b55292c492388632c474420ee82e954b393b"
                      >
                        <span data-highlight-target="0xd217b55292c492388632c474420ee82E954B393B">
                          0xd217b552...E954B393B
                        </span>
                      </span>
                    </a>
                    <span className="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">
                      4<b>.</b>40889 Eth
                    </span>
                  </div>
                </div>
                <div
                  className="d-none d-sm-block text-end ms-2 ms-sm-0"
                  data-bs-toggle="tooltip"
                  title="Amount"
                >
                  <span className="badge border border-dark dark:border-white border-opacity-15 text-dark  py-1.5 px-2 fw-medium">
                    4<b>.</b>40889 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4 col-lg-5">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-memo fs-lg" />
                  </div>
                  <div className="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">TX#</span>
                    <a
                      className="d-block text-truncate"
                      style={{ maxWidth: "7rem" }}
                      href="tx/0x9913777041cf9b37e46a77aec0f8e05e3b05cf158334f1ade7800521c7d39513.html"
                    >
                      0x9913777041cf9b37e46a77aec0f8e05e3b05cf158334f1ade7800521c7d39513
                    </a>
                    <div className="small text-muted">9 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    From{" "}
                    <a
                      data-highlight-value=""
                      className="d-inline-flex align-items-center"
                      href="address/0x5609c45180d8cd70915525aa5f9ddff43a12822a.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x5609c45180d8cd70915525aa5f9ddff43a12822a"
                      >
                        <span data-highlight-target="0x5609C45180D8Cd70915525aA5f9DDFF43A12822a">
                          0x5609C451...43A12822a
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-1">
                    To{" "}
                    <a
                      data-highlight-value=""
                      href="address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.html"
                      className="d-inline-flex align-items-center"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                      >
                        <span data-highlight-target="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48">
                          0xA0b86991...E3606eB48
                        </span>
                      </span>
                    </a>
                    <span className="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">
                      0 Eth
                    </span>
                  </div>
                </div>
                <div
                  className="d-none d-sm-block text-end ms-2 ms-sm-0"
                  data-bs-toggle="tooltip"
                  title="Amount"
                >
                  <span className="badge border border-dark dark:border-white border-opacity-15 text-dark  py-1.5 px-2 fw-medium">
                    0 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4 col-lg-5">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-memo fs-lg" />
                  </div>
                  <div className="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">TX#</span>
                    <a
                      className="d-block text-truncate"
                      style={{ maxWidth: "7rem" }}
                      href="tx/0x93ecae17b1fcc4e17aa7e42b6aa7350d9d4448db1d91aa76130bfd111917ca40.html"
                    >
                      0x93ecae17b1fcc4e17aa7e42b6aa7350d9d4448db1d91aa76130bfd111917ca40
                    </a>
                    <div className="small text-muted">9 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    From{" "}
                    <a
                      data-highlight-value=""
                      className="d-inline-flex align-items-center"
                      href="address/0x5de1b7f14de50ed6e430ea144eed8bc9d0bbb30c.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x5de1b7f14de50ed6e430ea144eed8bc9d0bbb30c"
                      >
                        <span data-highlight-target="0x5dE1B7f14De50Ed6e430ea144eED8Bc9d0Bbb30C">
                          0x5dE1B7f1...9d0Bbb30C
                        </span>
                      </span>
                    </a>
                  </div>
                  
                  <div className="d-flex align-items-center flex-wrap gap-1">
                    To{" "}
                    <a
                      data-highlight-value=""
                      href="address/0x1de327c23ed8f52f797d55b31abce98cb46c8ea9.html"
                      className="d-inline-flex align-items-center"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x1de327c23ed8f52f797d55b31abce98cb46c8ea9"
                      >
                        <span data-highlight-target="0x1De327C23ed8F52f797D55B31ABCe98cb46C8EA9">
                          0x1De327C2...cb46C8EA9
                        </span>
                      </span>
                    </a>
                    <span className="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">
                      0 Eth
                    </span>
                  </div>
                </div>
                <div
                  className="d-none d-sm-block text-end ms-2 ms-sm-0"
                  data-bs-toggle="tooltip"
                  title="Amount"
                >
                  <span className="badge border border-dark dark:border-white border-opacity-15 text-dark  py-1.5 px-2 fw-medium">
                    0 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4 col-lg-5">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-memo fs-lg" />
                  </div>
                  <div className="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">TX#</span>
                    <a
                      className="d-block text-truncate"
                      style={{ maxWidth: "7rem" }}
                      href="tx/0xd0dceb13f0c75fb17cde582b1e5bce1bd7345c3e867566fd5ede420067cdd214.html"
                    >
                      0xd0dceb13f0c75fb17cde582b1e5bce1bd7345c3e867566fd5ede420067cdd214
                    </a>
                    <div className="small text-muted">9 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    From{" "}
                    <a
                      data-highlight-value=""
                      className="d-inline-flex align-items-center"
                      href="address/0xd2674da94285660c9b2353131bef2d8211369a4b.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0xd2674da94285660c9b2353131bef2d8211369a4b"
                      >
                        <span data-highlight-target="0xd2674dA94285660c9b2353131bef2d8211369A4B">
                          0xd2674dA9...211369A4B
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-1">
                    To{" "}
                    <a
                      data-highlight-value=""
                      href="address/0xe3e7211cd65fac218ad02ef51ca09b5036f779fd.html"
                      className="d-inline-flex align-items-center"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0xe3e7211cd65fac218ad02ef51ca09b5036f779fd"
                      >
                        <span data-highlight-target="0xe3e7211CD65FaC218Ad02eF51Ca09b5036f779fd">
                          0xe3e7211C...036f779fd
                        </span>
                      </span>
                    </a>
                    <span className="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">
                      0<b>.</b>43065 Eth
                    </span>
                  </div>
                </div>
                <div
                  className="d-none d-sm-block text-end ms-2 ms-sm-0"
                  data-bs-toggle="tooltip"
                  title="Amount"
                >
                  <span className="badge border border-dark dark:border-white border-opacity-15 text-dark  py-1.5 px-2 fw-medium">
                    0<b>.</b>43065 Eth
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-3.5 mb-3.5" />
            <div className="row">
              <div className="col-sm-4 col-lg-5">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="d-none d-sm-flex content-center bg-light text-muted rounded p-3"
                    style={{ height: "3rem", width: "3rem" }}
                  >
                    <i className="fal fa-memo fs-lg" />
                  </div>
                  <div className="d-flex align-items-center align-items-sm-start flex-row flex-sm-column gap-1 gap-sm-0">
                    <span className="d-inline-block d-sm-none">TX#</span>
                    <a
                      className="d-block text-truncate"
                      style={{ maxWidth: "7rem" }}
                      href="tx/0x3666b07e1671f70b59984cfe7cfa3072ba9d0fb9ec9209b6fc7128e20b34f871.html"
                    >
                      0x3666b07e1671f70b59984cfe7cfa3072ba9d0fb9ec9209b6fc7128e20b34f871
                    </a>
                    <div className="small text-muted">9 secs ago</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-lg-7 d-flex justify-content-sm-between align-items-end align-items-sm-center">
                <div className="pe-0 pe-sm-2">
                  <div className="d-flex flex-wrap gap-1">
                    From{" "}
                    <a
                      data-highlight-value=""
                      className="d-inline-flex align-items-center"
                      href="address/0xffc5d996c78584b83461c1ae43ececeea59cfd80.html"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0xffc5d996c78584b83461c1ae43ececeea59cfd80"
                      >
                        <span data-highlight-target="0xffc5d996C78584b83461C1ae43eCeCEEa59CFd80">
                          0xffc5d996...Ea59CFd80
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-1">
                    To{" "}
                    <a
                      data-highlight-value=""
                      href="address/0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae.html"
                      className="d-inline-flex align-items-center"
                    >
                      <span
                        data-bs-toggle="tooltip"
                        title="0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae"
                      >
                        <span data-highlight-target="0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE">
                          0x1231DEB6...7486F4EaE
                        </span>
                      </span>
                    </a>
                    <span className="d-inline d-sm-none badge border border-dark dark:border-white border-opacity-15 text-dark ms-1 py-1.5 px-2 fw-medium">
                      0<b>.</b>03011 Eth
                    </span>
                  </div>
                </div>
                <div
                  className="d-none d-sm-block text-end ms-2 ms-sm-0"
                  data-bs-toggle="tooltip"
                  title="Amount"
                >
                  <span className="badge border border-dark dark:border-white border-opacity-15 text-dark  py-1.5 px-2 fw-medium">
                    0<b>.</b>03011 Eth
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a
            className="card-footer bg-light fw-medium text-cap link-muted text-center"
            href="txs.html"
          >
            View all transactions
            <i className="far fa-long-arrow-right ms-1" />
          </a>
        </div>
      </div>
      {/* End Card 2 */}
    </div>
    {/* End Custom Cards */}
  </section>
  {/* Modal: Card Customize */}
  <div
    className="modal fade"
    id="customizeCardModal"
    tabIndex={-1}
    aria-labelledby="customizeCardLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="customizeCardLabel">
            Custom Card
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <p>Customize this card by selecting one of the options below.</p>
          <form>
            <div id="ContentPlaceHolder1_divSavedAdvancedFiltersOption">
              <h6 className="text-cap fw-medium mb-2">ADVANCED FILTER</h6>
              <div className="d-flex gap-2 mb-4">
                <div
                  className="position-relative border rounded py-1 px-2"
                  id="checkAdvancedFilterInputWrapper"
                >
                  <input
                    className="form-check-input me-1"
                    type="radio"
                    name="checkCustomOption"
                    defaultValue="AdvancedFilters"
                    id="checkAdvancedFilter"
                  />
                  <label
                    className="form-check-label stretched-link"
                    htmlFor="checkAdvancedFilter"
                  >
                    Saved Filters
                  </label>
                </div>
              </div>
            </div>
            <h6 className="text-cap fw-medium mb-2">PRESET</h6>
            <div className="d-flex flex-wrap gap-2">
              <div className="position-relative border rounded py-1 px-2">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  name="checkCustomOption"
                  defaultValue="LatestBlocks"
                  id="checkPresets1"
                />
                <label
                  className="form-check-label stretched-link"
                  htmlFor="checkPresets1"
                >
                  Latest Blocks
                </label>
              </div>
              <div className="position-relative border rounded py-1 px-2">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  name="checkCustomOption"
                  defaultValue="LatestTransactions"
                  id="checkPresets2"
                />
                <label
                  className="form-check-label stretched-link"
                  htmlFor="checkPresets2"
                >
                  Latest Transactions
                </label>
              </div>
              <div className="position-relative border rounded py-1 px-2">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  name="checkCustomOption"
                  defaultValue="HotContracts"
                  id="checkPresets3"
                />
                <label
                  className="form-check-label stretched-link"
                  htmlFor="checkPresets3"
                >
                  Hot Contracts
                </label>
              </div>
              <div className="position-relative border rounded py-1 px-2">
                <input
                  className="form-check-input me-1"
                  type="radio"
                  name="checkCustomOption"
                  defaultValue="TopGuzzlers"
                  id="checkPresets4"
                />
                <label
                  className="form-check-label stretched-link"
                  htmlFor="checkPresets4"
                >
                  Top Guzzlers
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer bg-light">
          <button
            type="button"
            className="btn btn-ghost-white"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            id="btnSaveCardType"
            className="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* End Modal: Card Customize */}
  {/* Modal: Advanced Filter List */}
  <div
    className="modal fade"
    id="advancedFilterListModal"
    tabIndex={-1}
    aria-labelledby="advancedFilterListModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="advancedFilterListModalLabel">
            Choose Advanced Filter
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div id="listAdvancedFilter" className="modal-body">
          <div className="position-relative mb-4">
            <span
              className="d-flex align-items-center position-absolute top-0 bottom-0"
              title="Search"
              style={{ left: "0.75rem" }}
            >
              <i className="fa-regular fa-search fs-5 text-secondary" />
            </span>
            <input
              id="txtSearchSavedFilters"
              className="search form-control form-control-lg bg-light bg-focus-white"
              type="text"
              placeholder="Search saved filters"
              aria-label="Search"
              style={{ paddingLeft: "2.375rem" }}
            />
          </div>
          <div
            id="divSavedAdvancedFiltersResult"
            className="list d-flex flex-column scrollbar-custom overflow-y-auto gap-1"
            style={{ maxHeight: "25rem" }}
          >
            <div id="divSelectedFilters" className="d-none"></div>
            <h6 className="text-cap mb-0">Advanced Filter List</h6>
            <div id="divAdvancedFilterList"></div>
          </div>
          {/* End Advanced Filter List */}
        </div>
        <div className="modal-footer bg-light">
          <button
            type="button"
            className="btn btn-ghost-white"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            id="btnSaveAdvancedFilterCard"
            className="btn btn-primary"
           
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* End Modal: Advanced Filter List */}
</main>
<>
  <div id="push" style={{ display: "none" }} />
  <div
    className="modal fade"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myModalLabel"
    id="emailSubscribeModalBox"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-sm" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close close-md"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="text-center py-5-alt px-4">
            <div id="emailSubscribeModalBoxText" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="copyAddressConfirmModal"
    tabIndex={-1}
    role="dialog"
  >
    <div className="modal-dialog modal-md">
      <div className="modal-content">
        <div className="modal-header border-0">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body pt-0">
          <div className="mb-5">
            <div className="text-center">
              <div className="mb-2">
                <i className="fas fa-exclamation-triangle text-warning fs-2" />
              </div>
              <h6 className="modal-title fs-5 mb-0">Before You Copy</h6>
            </div>
            <div className="mb-3 text-center">
              <p className="text-muted small" id="addressToCopy" />
            </div>
            <p id="copyAddressConfirmMessage" />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="popupDontShowAgain"
              />
              <label className="form-check-label" htmlFor="popupDontShowAgain">
                Dont show this for 30 days
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              id="btnConfirmCopyAddress"
              data-clipboard-target="#addressToCopy"
              className="btn btn-lg btn-secondary"
              data-bs-dismiss="modal"
            >
              Understand, Copy Address
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal: Add Transaction Private Note */}
  <div
    className="modal fade"
    id="tnxPrivateNoteModal"
    tabIndex={-1}
    role="dialog"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title" id="tnxPrivateNoteModalLabel">
            Transaction Private Note
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-4">
              <label className="form-label" htmlFor="saveTxnNoteHash">
                Transaction Hash
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="saveTxnNoteHash"
               
              />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="editTxnNote">
                Private Note Description
              </label>
              <textarea
                className="form-control py-2"
                id="editTxnNote"
                rows={5}
                name="text"
                placeholder="Short description.."
                maxLength={100}
                defaultValue={""}
              />
              <div className="small text-muted mt-1 ms-1">
                <span id="txtPrivateNoteTip" />
              </div>
              <div className="form-text mt-2">
                <p>
                  Please <strong className="fw-medium">DO NOT</strong> store any
                  passwords or private keys here. A private note (up to 100
                  characters) can be saved and is useful for transaction
                  tracking.
                </p>
              </div>
            </div>
            <div className="d-flex flex-wrap gap-4">
              <a
                target="_blank"
                href="login3eba.html"
                rel="noopener noreferrer"
              >
                View All Transactions Private Notes{" "}
                <i className="far fa-arrow-up-right text-secondary ms-1" />
              </a>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-ghost-white"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
    type="button"
    className="btn btn-primary"
   
  >
            Save changes
          </button>
          <span
            id="modalElement"
            
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  </div>
  {/* End Modal: Add Transaction Private Note */}
  <footer id="masterFooter" className="bg-light mt-auto d-print-none">
    <div className="container-xxl">
      <div className="d-flex justify-content-between align-items-baseline py-6">
        {/* Social Links */}
        <div className="d-flex gap-2">
          <a
            className="btn btn-sm btn-secondary content-center rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
            href="https://twitter.com/etherscan"
            rel="nofollow noopener"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="top"
            title="X (Twitter)"
          >
            <i className="fab fa-x-twitter" />
          </a>
          <a
            className="btn btn-sm btn-secondary content-center rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
            href="https://medium.com/etherscan-blog"
            rel="nofollow noopener"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="top"
            title="Medium"
          >
            <i className="fab fa-medium" />
          </a>
          <a
            className="btn btn-sm btn-secondary content-center rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
            href="https://www.facebook.com/etherscan/"
            rel="nofollow noopener"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="top"
            title="Facebook"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            className="btn btn-sm btn-secondary content-center rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
            href="https://www.reddit.com/r/etherscan/"
            rel="nofollow noopener"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="top"
            title="Reddit"
          >
            <i className="fab fa-reddit-alien" />
          </a>
        </div>
        {/* End Social Links */}
        <a className="link-dark" href="#">
          <i className="far fa-arrow-up-to-line me-1" />
          Back to Top
        </a>
      </div>
      <hr className="my-0" />
      {/* Footer Content */}
      <div className="row justify-content-md-between py-8 py-lg-10">
        <div className="col-lg-4 pe-xl-16 mb-4 mb-lg-0">
          <div className="d-flex align-items-center mb-3">
            <Image
              className="me-2"
              height={20}
              width={20}
              data-img-theme="light"
              src="/images/svg/brands/ethereum-original.svg"
              alt="Ethereum Logo"
            />
            <Image
              className="me-2"
              width={20}
              height={20}

              data-img-theme="darkmode"
              src="/images/svg/brands/ethereum-original-light.svg"
              alt="Ethereum Logo"
            />
            <span className="fs-5">Powered by Ethereum</span>
          </div>
          <p className="fs-sm">
            Etherscan is a Block Explorer and Analytics Platform for Ethereum, a
            decentralized smart contracts platform.
          </p>
          <div className="d-none d-lg-block mt-n4 mb-n6">
            <Image
              className="opacity-50"
              height={168.3}
              width={280}
              data-img-theme="light"
              src="/images/map.png"
              alt="Background Map Image"
            />
            <Image
              className="opacity-50"
              width={280}
              height={280}
              data-img-theme="darkmode"
              src="/images/map-light.png"
              alt="Background Map Image"
            />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg mb-10 mb-md-0">
          <h4 className="h6 mb-3">Company</h4>
          {/* List Group */}
          <ul className="list-unstyled list-sm-space fs-sm mb-0">
            <li>
              <a className="link-dark" href="aboutus.html">
                About Us
              </a>
            </li>
            <li>
              <a className="link-dark" href="brandassets.html">
                Brand Assets
              </a>
            </li>
            <li>
              <a className="link-dark" href="contactus.html">
                Contact Us
              </a>
            </li>
            <li>
              <a className="link-dark" href="careers.html">
                <span className="me-1">Careers</span>{" "}
                <span className="bg-primary text-white small fw-medium text-nowrap rounded-pill p-1 px-2">
                  We re Hiring!
                </span>
              </a>
            </li>
            <li>
              <a className="link-dark" href="terms.html">
                Terms
              </a>{" "}
              &amp;{" "}
              <a className="link-dark" href="privacyPolicy.html">
                Privacy
              </a>
            </li>
            <li>
              <a className="link-dark" href="bugbounty.html">
                Bug Bounty
              </a>
            </li>
          </ul>
          {/* End List Group */}
        </div>
        <div className="col-6 col-md-4 col-lg mb-10 mb-md-0">
          <h4 className="h6 mb-3">Community</h4>
          {/* List Group */}
          <ul className="list-unstyled list-sm-space fs-sm mb-0">
            <li>
              <a
                className="link-dark"
                href="https://docs.etherscan.io/etherscan-v2"
                target="_blank"
              >
                API Documentation
              </a>
            </li>
            <li>
              <a className="link-dark" href="https://info.etherscan.com/">
                Knowledge Base
              </a>
            </li>
            <li>
              <a
                className="link-dark"
                href="https://etherscan.freshstatus.io/"
                rel="nofollow noopener"
                target="_blank"
              >
                Network Status
              </a>
            </li>
            <li>
              <a
                className="link-dark"
                href="https://info.etherscan.com/newsletters/"
              >
                Newsletters
              </a>
            </li>
          </ul>
          {/* End List Group */}
        </div>
        <div className="col-6 col-md-4 col-lg">
          <h4 className="h6 mb-3">Products &amp; Services</h4>
          {/* List Group */}
          <ul className="list-unstyled list-sm-space fs-sm mb-0">
            <li>
              <a className="link-dark" href="contactusadvertise.html">
                Advertise
              </a>
            </li>
            <li>
              <a className="link-dark" href="eaas.html">
                Explorer as a Service (EaaS)
              </a>
            </li>
            <li>
              <a className="link-dark" href="apis.html">
                API Plans
              </a>
            </li>
            <li>
              <a className="link-dark" href="priority-support.html">
                Priority Support
              </a>
            </li>
            <li>
              <a
                className="link-dark"
                href="https://blockscan.com/"
                target="_blank"
              >
                Blockscan{" "}
                <i className="far fa-arrow-up-right-from-square text-muted ms-1" />
              </a>
            </li>
            <li>
              <a
                className="link-dark"
                href="https://chat.blockscan.com/start"
                target="_blank"
              >
                Blockscan Chat{" "}
                <i className="far fa-arrow-up-right-from-square text-muted ms-1" />
              </a>
            </li>
          </ul>
          {/* End List Group */}
        </div>
      </div>
      {/* End Footer Content */}
      {/* Copyright Content */}
      <div className="border-top py-4">
        <div className="row justify-content-between align-items-center fs-sm">
          <div className="col-md mb-2 mb-md-0">
            <p className="mb-0">Etherscan © 2025 (B1)</p>
          </div>
          <div className="col-md text-md-end">
            <p className="mb-0">
              Donations:{" "}
              <a
                className="me-1"
                href="address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f.html"
              >
                <span id="spanDonateAddress">
                  0x71c765...d8976f
                </span>
              </a>{" "}
              <i className="fas fa-heart text-danger" />
            </p>
          </div>
        </div>
      </div>
      {/* End Copyright Content */}
    </div>
  </footer>
</>
<>
  <div id="masterDivCookie">
    <div
      className="fixed-bottom text-center"
      id="divcookie"
      style={{ display: "none" }}
    >
      <div
        className="alert alert-light fade show border shadow-sm d-inline-flex flex-wrap flex-sm-nowrap align-items-sm-center text-start gap-3 mx-3"
        role="alert"
      >
        <p className="text-dark mb-0">
          <i className="far fa-cookie-bite text-muted" /> This website{" "}
          <a href="terms.html#cookiestatement" target="_blank">
            uses cookies to improve your experience
          </a>
          . By continuing to use this website, you agree to its{" "}
          <a href="terms.html" target="_blank">
            Terms
          </a>{" "}
          and{" "}
          <a href="privacyPolicy.html" target="_blank">
            Privacy Policy
          </a>
          .
        </p>
        <button
          id="btnCookie"
          type="button"
          className="btn btn-primary text-nowrap px-4"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          Got it!
        </button>
      </div>
    </div>
  </div>
  {/* End Cookie Alert */}
  {/* JS Implementing Plugins */}
  {/* JS Front */}
  {/* JS */}
  {/* JS Init. */}
</>



      </div>
      
  );
}

