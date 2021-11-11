import discord, { Intents } from 'discord.js'

import config from '../configuration/config.json'
const token = config.token;

const client = new discord.Client({ intents: [ Intents.FLAGS.GUILD_MESSAGES ] });

client.login(token);