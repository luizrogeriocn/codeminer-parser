//get games:        InitGame(((.|\n)(?!-{60}))*)
//get kills:        Kill:(.*)\n
//get killer:       \d:\s(.*)\skilled
//get killed:       killed\s(.*)\sby
//get meanOfDeath:  by\s(.*)\n
//get clientInfo:   ClientUserinfoChanged(.*)\n
//get clientIds:    ClientConnect:\s(\d*)\n
//get clientName:   n\\(.*)\\t\\0