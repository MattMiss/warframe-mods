import React, {Fragment, Component} from 'react';
import classes from './ModNavigation.css';
import ModNavInnerRow from './ModNavInnerRow/ModNavInnerRow';
import BasicTable from '../../../containers/Table/BasicTable';

import warframeMods from '../../../json/warframe_mods.json';
import auraMods from '../../../json/aura_mods.json';

import assaultMods from '../../../json/assault_rifle_mods.json';
import bowMods from '../../../json/bow_mods.json';
import pistolMods from '../../../json/pistol_mods.json';
import primaryMods from '../../../json/primary_mods.json';
import rifleMods from '../../../json/rifle_mods.json';
import shotgunMods from '../../../json/shotgun_mods.json';
import sniperMods from '../../../json/sniper_mods.json';
import stanceMods from '../../../json/stance_mods.json';

import companionMods from '../../../json/stance_mods.json';
import roboticMods from '../../../json/companion_mods.json';
import sentinelMods from '../../../json/sentinel_mods.json';
import moaMods from '../../../json/moa_mods.json';
import beastMods from '../../../json/beast_mods.json';
import kubrowMods from '../../../json/kubrow_mods.json';
import kavatMods from '../../../json/kavat_mods.json';




class ModNavigation extends Component {

    state = {
        data: auraMods,
        warframe: false,
        weapons: false,
        companions: false,
        archwing: false,
        kdrive: false,
        syndicate: false,
        conclave: false, 
        warframeTables : {
            warframes: false,
            aura: false
        }, 
        weaponTables: {
            assaultRifle: false,
            bow: false,
            pistol: false,
            primary: false,
            rifle: false, 
            shotgun: false,
            sniper: false,
            stance: false
        },
        companionTables: {
            companion: false,
            robotic: false,
            sentinel: false,
            moa: false,
            beast: false,
            kubrow: false,
            kavat: false
        },
        archwingTables: {
            archwing: false,
            archwingGun: false,
            archwingMelee: false
        },
        kdriveTable: {
            kdrive: false
        },
        activeOuter: 'warframe',
        activeInner: null
    }

    pageChangeHandler(buttonName) {
        this.setState({
            warframe: false,
            weapons: false,
            companions: false,
            archwing: false,
            kdrive: false,
            syndicate: false,
            conclave: false
        });

        switch(buttonName) {
            case 'warframe':
                this.setState({warframe: !this.state.warframe})
                break;
            case 'weapons':
                this.setState({weapons: !this.state.weapons})
                break;
            case 'companions':
                this.setState({companions: !this.state.companions})
                break;
            case 'archwing':
                this.setState({archwing: !this.state.archwing})
                break;
            case 'kdrive':
                this.setState({kdrive: !this.state.kdrive})
                break;
            case 'syndicate':
                this.setState({syndicate: !this.state.syndicate})
                break;
            case 'conclave':
                this.setState({conclave: !this.state.conclave})
                break;

            default:               
        }
    }

    tableDataHandler(buttonName) {
        this.clearTables()
        switch(buttonName) {
            case 'warframes':
                this.setState({warframeTables: {
                    warframes: !this.state.warframeTables.warframes
                }})
                break; 
            case 'aura':
                this.setState({warframeTables: {
                    aura: !this.state.warframeTables.aura
                }})
                break;    
            case 'assault':
                this.setState({weaponTables: {
                    assaultRifle: !this.state.weaponTables.assaultRifle
                }})
                break;
            case 'bow':
                this.setState({weaponTables: {
                    bow: !this.state.weaponTables.bow
                }})
                break;
            case 'pistol':
                this.setState({weaponTables: {
                    pistol: !this.state.weaponTables.pistol
                }})
                break;
            case 'primary':
                this.setState({weaponTables: {
                    primary: !this.state.weaponTables.primary
                }})
                break;
            case 'rifle':
                this.setState({weaponTables: {
                    rifle: !this.state.weaponTables.rifle
                }})
                break;
            case 'assault':
                this.setState({weaponTables: {
                    assault: !this.state.weaponTables.assault
                }})
                break;
            case 'shotgun':
                this.setState({weaponTables: {
                    shotgun: !this.state.weaponTables.shotgun
                }})
                break;
            case 'sniper':
                this.setState({weaponTables: {
                    sniper: !this.state.weaponTables.sniper
                }})
                break;
            case 'stance':
                this.setState({weaponTables: {
                    stance: !this.state.weaponTables.stance
                }})
                break;
            case 'companion':
                this.setState({companionTables: {
                    companion: !this.state.weaponTables.companion
                }})
                break;
            case 'robotic':
                this.setState({companionTables: {
                    robotic: !this.state.weaponTables.robotic
                }})
                break;
            case 'sentinel':
                this.setState({companionTables: {
                    sentinel: !this.state.weaponTables.sentinel
                }})
                break;
            case 'moa':
                this.setState({companionTables: {
                    moa: !this.state.weaponTables.moa
                }})
                break;
            case 'beast':
                this.setState({companionTables: {
                    beast: !this.state.weaponTables.beast
                }})
                break;
            case 'kubrow':
                this.setState({companionTables: {
                    kubrow: !this.state.weaponTables.kubrow
                }})
                break;    
            case 'kavat':
                this.setState({companionTables: {
                    kavat: !this.state.weaponTables.kavat
                }})
                break;

            default:               
        }
    }

    clearTables() {
        Object.keys(this.state.warframeTables).map(i => {
            return this.setState({warframeTables: false});
        })
    }


    render() {
        return(
            <Fragment>
                <div className='col-lg-12'>
                    <div className={classes.ButtonWrapper}>
                        <div
                            className={this.state.activeOuter === 'warframe' ? 'btn active' : 'btn'}
                            onClick={() => this.pageChangeHandler('warframe')}>
                            Warframe   
                        </div>
                        
                        <div className='col-xs'>
                            <button 
                                type="button" 
                                className="btn" 
                                onClick={() => this.pageChangeHandler('weapons')}>
                                Weapons
                            </button>
                        </div>
                        
                        <div>
                            <button 
                                type="button" 
                                className="btn" 
                                onClick={() => this.pageChangeHandler('companions')}>
                                Companions
                            </button>
                        </div>
                            
                        <div>
                            <button 
                                type="button" 
                                className="btn" 
                                onClick={() => this.pageChangeHandler('archwing')}>
                                Archwing
                            </button>
                        </div>
                            
                        <div>
                            <button 
                                type="button" 
                                className="btn" 
                                onClick={() => this.pageChangeHandler('kdrive')}>
                                K-Drive
                            </button>
                        </div>
                            
                        <div>
                            <button 
                                type="button" 
                                className="btn" 
                                onClick={() => this.pageChangeHandler('syndicate')}>
                                Syndicate
                            </button>
                        </div>
                            
                        <div>
                            <button 
                                type="button" 
                                className="btn" 
                                onClick={() => this.pageChangeHandler('conclave')}>
                                Conclave
                            </button> 
                        </div>
                            
                    </div>
                </div>
                
                    
                <div className='col-lg-12'>
                    <div className={classes.ButtonWrapper}>
                        <ModNavInnerRow show={this.state.warframe}>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('warframes')}>
                                    Warframes
                                </button>
                            </div>
                            <div>    
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('aura')}>
                                    Aura
                                </button> 
                            </div>
                        </ModNavInnerRow>
                        <ModNavInnerRow show={this.state.weapons}>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('assault')}>
                                    Assault Rifle
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('bow')}>
                                    Bow
                                </button>
                            </div>
                            <div> 
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('pistol')}>
                                    Pistol
                                </button>
                            </div>
                            <div> 
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('primary')}>
                                    Primary
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('rifle')}>
                                    Rifle
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('shotgun')}>
                                    Shotgun
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('sniper')}>
                                    Sniper
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('stance')}>
                                    Stance
                                </button>
                            </div>
                        </ModNavInnerRow>
                        <ModNavInnerRow show={this.state.companions}>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('companion')}>
                                    Companion
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('robotic')}>
                                    Robotic
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('sentinel')}>
                                    Sentinel
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('moa')}>
                                    MOA
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('beast')}>
                                    Beast
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('kubrow')}>
                                    Kubrow
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn" 
                                    onClick={() => this.tableDataHandler('kavat')}>
                                    Kavat
                                </button>
                            </div>
                        </ModNavInnerRow>
                        
                        <ModNavInnerRow show={this.state.archwing}>
                            <div className={classes.Tab}>
                                <button type="button" className="btn">Archwing</button>
                                <button type="button" className="btn">Archwing Gun</button>
                                <button type="button" className="btn">Archwing Melee</button>
                            </div>
                        </ModNavInnerRow>
                        
                        <ModNavInnerRow show={this.state.kdrive}>
                            <div className={classes.Tab}>
                                <button type="button" className="btn">K-Drive</button>
                            </div>
                        </ModNavInnerRow>
                        
                    </div>
                </div>
                

                <BasicTable data={warframeMods} show={this.state.warframeTables.warframes}/>
                <BasicTable data={auraMods} show={this.state.warframeTables.aura}/>

                <BasicTable data={assaultMods} show={this.state.weaponTables.assaultRifle}/>
                <BasicTable data={bowMods} show={this.state.weaponTables.bow}/>
                <BasicTable data={pistolMods} show={this.state.weaponTables.pistol}/>
                <BasicTable data={primaryMods} show={this.state.weaponTables.primary}/>
                <BasicTable data={rifleMods} show={this.state.weaponTables.rifle}/>
                <BasicTable data={shotgunMods} show={this.state.weaponTables.shotgun}/>
                <BasicTable data={sniperMods} show={this.state.weaponTables.sniper}/>
                <BasicTable data={stanceMods} show={this.state.weaponTables.stance}/>

                <BasicTable data={companionMods} show={this.state.companionTables.companion}/>
                <BasicTable data={roboticMods} show={this.state.companionTables.robotic}/>
                <BasicTable data={sentinelMods} show={this.state.companionTables.sentinel}/>
                <BasicTable data={moaMods} show={this.state.companionTables.moa}/>
                <BasicTable data={beastMods} show={this.state.companionTables.beast}/>
                <BasicTable data={kubrowMods} show={this.state.companionTables.kubrow}/>
                <BasicTable data={kavatMods} show={this.state.companionTables.kavat}/>
            </Fragment>
        ); 
    }
     
};

export default ModNavigation;