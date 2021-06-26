# man - mysql(1)

MySQL 命令行工具 
[mysql(1) - Linux man page](https://linux.die.net/man/1/mysql)

## 语法

```
mysql [ options ] db_name
```

## 描述

`mysql` is a simple SQL shell with input line editing capabilities. It supports interactive and noninteractive use. When used interactively, query results are presented in an ASCII-table format. When used noninteractively (for example, as a filter), the result is presented in tab-separated format. The output format can be changed using command options.

If you have problems due to insufficient memory for large result sets, use the `--quick` option. This forces `mysql` to retrieve results from the server a row at a time rather than retrieving the entire result set and buffering it in memory before displaying it. This is done by returning the result set using the mysql_use_result() C API function in the client/server library rather than mysql_store_result().

Using `mysql` is very easy. Invoke it from the prompt of your command interpreter as follows:

```
$ mysql db_name 
```
Or:

```
$ mysql --user=user_name --password=your_password db_name 
```

Then type an SQL statement, end it with ";", \g, or \G and press Enter.

As of MySQL 5.1.10, typing Control+C causes `mysql` to attempt to kill the current statement. If this cannot be done, or Control+C is typed again before the statement is killed, `mysql` exits. Previously, Control+C caused `mysql` to exit in all cases.

You can execute SQL statements in a script file (batch file) like this:

```
$ mysql db_name output.tab 
```

On Unix, the `mysql` client writes a record of executed statements to a history file. See the section called "MYSQL HISTORY FILE".

## Mysql Options

`mysql` supports the following options, which can be specified on the command line or in the [mysql] and [client] groups of an option file. `mysql` also supports the options for processing option files described at Section 4.2.3.4, "Command-Line Options that Affect Option-File Handling".

• `--help, -?`

Display a help message and exit.

• `--auto-rehash`

Enable automatic rehashing. This option is on by default, which enables database, table, and column name completion. Use `--disable-auto-rehash` to disable rehashing. That causes `mysql` to start faster, but you must issue the rehash command if you want to use name completion.

To complete a name, enter the first part and press Tab. If the name is unambiguous, `mysql` completes it. Otherwise, you can press Tab again to see the possible names that begin with what you have typed so far. Completion does not occur if there is no default database.

• `--batch, -B`

Print results using tab as the column separator, with each row on a new line. With this option, `mysql`does not use the history file.

Batch mode results in nontabular output format and escaping of special characters. Escaping may be disabled by using raw mode; see the description for the `--raw` option.

• `--bind-address=ip_address`

On a computer having multiple network interfaces, this option can be used to select which interface is employed when connecting to the MySQL server.

This option is supported only in the version of the `mysql` client that is supplied with MySQL Cluster, beginning with MySQL Cluster NDB 6.3.4\. It is not available in standard MySQL 5.1 releases.

• `--character-sets-dir=path`

The directory where character sets are installed. See Section 10.5, "Character Set Configuration".

• `--column-names`

Write column names in results.

• `--column-type-info, -m`

Display result set metadata. This option was added in MySQL 5.1.14\. (Before that, use `--debug-info`.) The `-m` short option was added in MySQL 5.1.21.

• `--comments, -c`

Whether to preserve comments in statements sent to the server. The default is --skip-comments (discard comments), enable with --comments (preserve comments). This option was added in MySQL 5.1.23.

• `--compress, -C`

Compress all information sent between the client and the server if both support compression.

• `--database=db_name`, `-D db_name`

The database to use. This is useful primarily in an option file.

• `--debug[=debug_options], -# [debug_options]`

Write a debugging log. A typical *debug_options* string is 'd:t:o,*file_name*'. The default is 'd:t:o,/tmp/mysql.trace'.

• `--debug-check`

Print some debugging information when the program exits. This option was added in MySQL 5.1.21.

• `--debug-info, -T`

Before MySQL 5.1.14, this option prints debugging information and memory and CPU usage statistics when the program exits, and also causes display of result set metadata during execution. As of MySQL 5.1.14, use `--column-type-info` to display result set metadata.

• `--default-character-set=charset_name`

Use *charset_name* as the default character set for the client and connection.

A common issue that can occur when the operating system uses utf8 or another multi-byte character set is that output from the `mysql` client is formatted incorrectly, due to the fact that the MySQL client uses the latin1 character set by default. You can usually fix such issues by using this option to force the client to use the system character set instead.

See Section 10.5, "Character Set Configuration", for more information.

• `--delimiter=str`

Set the statement delimiter. The default is the semicolon character (";").

• `--disable-named-commands`

Disable named commands. Use the \* form only, or use named commands only at the beginning of a line ending with a semicolon (";"). `mysql` starts with this option *enabled* by default. However, even with this option, long-format commands still work from the first line. See the section called "MYSQL COMMANDS".

• `--execute=statement`, `-e statement`

Execute the statement and quit. The default output format is like that produced with `--batch`. See Section 4.2.3.1, "Using Options on the Command Line", for some examples. With this option, `mysql`does not use the history file.

• `--force, -f`

Continue even if an SQL error occurs.

• `--host=host_name`, `-h host_name`

Connect to the MySQL server on the given host.

• `--html, -H`

Produce HTML output.

• `--ignore-spaces, -i`

Ignore spaces after function names. The effect of this is described in the discussion for the IGNORE_SPACE SQL mode (see Section 5.1.7, "Server SQL Modes").

• `--line-numbers`

Write line numbers for errors. Disable this with `--skip-line-numbers`.

• `--local-infile[={0|1}]`

Enable or disable LOCAL capability for LOAD DATA INFILE. With no value, the option enables LOCAL. The option may be given as `--local-infile=0` or `--local-infile=1` to explicitly disable or enable LOCAL. Enabling LOCAL has no effect if the server does not also support it.

• `--named-commands, -G`

Enable named `mysql` commands. Long-format commands are permitted, not just short-format commands. For example, quit and \q both are recognized. Use `--skip-named-commands` to disable named commands. See the section called "MYSQL COMMANDS".

• `--no-auto-rehash, -A`

This has the same effect as `-skip-auto-rehash`. See the description for `--auto-rehash`.

• `--no-beep, -b`

Do not beep when errors occur.

• `--no-named-commands, -g`

Deprecated, use `--disable-named-commands` instead. `--no-named-commands` is removed in MySQL 5.5.

• `--no-pager`

Deprecated form of `--skip-pager`. See the `--pager` option. `--no-pager` is removed in MySQL 5.5.

• `--no-tee`

Deprecated form of `--skip-tee`. See the `--tee` option. `--no-tee` is removed in MySQL 5.5.

• `--one-database, -o`

Ignore statements except those that occur while the default database is the one named on the command line. This option is rudimentary and should be used with care. Statement filtering is based only on USE statements.

Initially, `mysql` executes statements in the input because specifying a database *db_name* on the command line is equivalent to inserting USE *db_name* at the beginning of the input. Then, for each USE statement encountered, `mysql` accepts or rejects following statements depending on whether the database named is the one on the command line. The content of the statements is immaterial.

Suppose that `mysql` is invoked to process this set of statements:

DELETE FROM db2.t2;
USE db2;
DROP TABLE db1.t1;
CREATE TABLE db1.t1 (i INT);
USE db1;
INSERT INTO t1 (i) `VALUES`(1);
CREATE TABLE db2.t1 (j INT);

If the command line is `mysql --force --one-database db1, mysql` handles the input as follows:

• The DELETE statement is executed because the default database is db1, even though the statement names a table in a different database.

• The DROP TABLE and CREATE TABLE statements are not executed because the default database is not db1, even though the statements name a table in db1.

• The INSERT and CREATE TABLE statements are executed because the default database is db1, even though the CREATE TABLE statement names a table in a different database.

• `--pager[=command]`

Use the given command for paging query output. If the command is omitted, the default pager is the value of your PAGER environment variable. Valid pagers are `less, more`, `cat [> filename]`, and so forth. This option works only on Unix and only in interactive mode. To disable paging, use `--skip-pager`. the section called "MYSQL COMMANDS", discusses output paging further.

• `--password[=password], -p[password]`

The password to use when connecting to the server. If you use the short option form (`-p`), you *cannot*have a space between the option and the password. If you omit the *password* value following the `--password` or `-p` option on the command line, `mysql` prompts for one.

Specifying a password on the command line should be considered insecure. See Section 6.1.2.1, "End-User Guidelines for Password Security". You can use an option file to avoid giving the password on the command line.

• `--pipe, -W`

On Windows, connect to the server using a named pipe. This option applies only if the server supports named-pipe connections.

• `--port=port_num`, `-P port_num`

The TCP/IP port number to use for the connection.

• `--prompt=format_str`

Set the prompt to the specified format. The default is mysql>. The special sequences that the prompt can contain are described in the section called "MYSQL COMMANDS".

• `--protocol={TCP|SOCKET|PIPE|MEMORY}`

The connection protocol to use for connecting to the server. It is useful when the other connection parameters normally would cause a protocol to be used other than the one you want. For details on the permissible values, see Section 4.2.2, "Connecting to the MySQL Server".

• `--quick, -q`

Do not cache each query result, print each row as it is received. This may slow down the server if the output is suspended. With this option, `mysql` does not use the history file.

• `--raw, -r`

For tabular output, the "boxing" around columns enables one column value to be distinguished from another. For nontabular output (such as is produced in batch mode or when the `--batch` or `--silent`option is given), special characters are escaped in the output so they can be identified easily. Newline, tab, NUL, and backslash are written as \n, \t, \0, and \\. The `--raw` option disables this character escaping.

The following example demonstrates tabular versus nontabular output and the use of raw mode to disable escaping:

% `mysql` mysql> SELECT `CHAR`(92);
+----------+
| `CHAR`(92) |
+----------+
| \ |
+----------+
% `mysql -s` mysql> SELECT `CHAR`(92);
`CHAR`(92)
\\
% `mysql -s -r` mysql> SELECT `CHAR`(92);
`CHAR`(92)
\

• `--reconnect`

If the connection to the server is lost, automatically try to reconnect. A single reconnect attempt is made each time the connection is lost. To suppress reconnection behavior, use `--skip-reconnect`.

• `--safe-updates, --i-am-a-dummy`, `-U`

Permit only those UPDATE and DELETE statements that specify which rows to modify by using key values. If you have set this option in an option file, you can override it by using `--safe-updates` on the command line. See the section called "MYSQL TIPS", for more information about this option.

• `--secure-auth`

Do not send passwords to the server in old (pre-4.1.1) format. This prevents connections except for servers that use the newer password format.

• `--show-warnings`

Cause warnings to be shown after each statement if there are any. This option applies to interactive and batch mode.

• `--sigint-ignore`

Ignore SIGINT signals (typically the result of typing Control+C).

• `--silent, -s`

Silent mode. Produce less output. This option can be given multiple times to produce less and less output.

This option results in nontabular output format and escaping of special characters. Escaping may be disabled by using raw mode; see the description for the `--raw` option.

• `--skip-column-names, -N`

Do not write column names in results.

• `--skip-line-numbers, -L`

Do not write line numbers for errors. Useful when you want to compare result files that include error messages.

• `--socket=path`, `-S path`

For connections to localhost, the Unix socket file to use, or, on Windows, the name of the named pipe to use.

• `--ssl`

Options that begin with `--ssl` specify whether to connect to the server using SSL and indicate where to find SSL keys and certificates. See Section 6.3.6.4, "SSL Command Options".

• `--table, -t`

Display output in table format. This is the default for interactive use, but can be used to produce table output in batch mode.

• `--tee=file_name`

Append a copy of output to the given file. This option works only in interactive mode. the section called "MYSQL COMMANDS", discusses tee files further.

• `--unbuffered, -n`

Flush the buffer after each query.

• `--user=user_name`, `-u user_name`

The MySQL user name to use when connecting to the server.

• `--verbose, -v`

Verbose mode. Produce more output about what the program does. This option can be given multiple times to produce more and more output. (For example, `-v -v -v` produces table output format even in batch mode.)

• `--version, -V`

Display version information and exit.

• `--vertical, -E`

Print query output rows vertically (one line per column value). Without this option, you can specify vertical output for individual statements by terminating them with \G.

• `--wait, -w`

If the connection cannot be established, wait and retry instead of aborting.

• `--xml, -X`

Produce XML output.