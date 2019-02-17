import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import random
from discord import Game


Client = discord.client
client = commands.Bot(command_prefix = '!')
Clientdiscord = discord.Client()


@client.event
async def on_member_join(member):
    print('Recognised that a member called ' + member.name + ' joined')
    await client.send_message(member, 'Welcome to Sweatcoin Exchange/Buying/Selling + Services! Enjoy your time here and be sure to read the information and rules sections.')
    print('Sent message to ' + member.name)
async def on_ready():
    await client.change_presence(game=Game(name='      '))
    print('Ready, Freddy') 


@client.event
async def on_message(message):
    if message.content == 'swc!middleman':
        await client.send_message(message.channel,'DM @Seller#0690 for a Middleman!')
    if message.content.startswith('swc!bet'):
        randomlist = ['win','lost']
        await client.send_message(message.channel,(random.choice(randomlist)))