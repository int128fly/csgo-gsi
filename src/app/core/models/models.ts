// provider
export interface IProvider {
    name: string,
    appid: number,
    version: number,
    steamid: string,
    timestamp: number
}

export interface ITeam {
    score: number,
    consecutive_round_losses: number,
    timeouts_remaining: number,
    matches_won_this_series: number
}

// map
export interface IMap {
    mode: string,
    name: string,
    phase: string,
    round: number,
    team_ct: ITeam,
    team_t: ITeam,
    num_matches_to_win_series: number,
    current_spectators: number,
    souvenirs_total: number
}

export type Team = 'T' | 'CT' | 'Spectator';
export type WeaponState = 'holstered' | 'active' | 'reloading';
export type WeaponType = 'Pistol' | 'Knife' | 'Rifle' | 'SniperRifle' | 'Machine gun' | 'Submachine Gun' | 'Shotgun' | 'Grenade' | 'C4';
export type MatchPhase = 'live';
export type Activity = 'playing' | 'menu';

// round
export interface IRound {
    phase: string
}

// smoked flashed burning seems to be events calculated between 0-255 (percentage of the effect)
export interface IPlayerState {
    health: number,
    armor: number,
    helmet: boolean,
    flashed: number,
    smoked: number,
    burning: number,
    money: number,
    round_kills: number,
    round_killshs: number,
    equip_value: number
}


export interface IPlayerWeapon {
    name: string,
    paintkit: string,
    type?: WeaponType, // taser has no type??? hello valve?
    state: WeaponState,
    ammo_clip?: number,
    ammo_clip_max?: number,
    ammo_reserve?: number
}

// player_id
export interface IPlayer {
    steamid: string,
    name: string,
    oberserver_slot: number,
    team: Team,
    activity: string,
    // player_state
    state: IPlayerState,
    weapons: { [key: string] : IMatchStats }
}

export interface IMatchStats {
    kills: number,
    assists: number,
    deaths: number,
    mvps: number,
    score: number
}

export interface IAuth {
    token: string
}