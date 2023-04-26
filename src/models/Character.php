<?php

namespace models;

class Character
{
    public Character $name;
    public Character $sire;
    public Character $dame;
    public \DateTime $born;
    public Race $race;
    public array $traits;

}