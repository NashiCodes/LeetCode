#include <string>
#include <iostream>
#include <regex>
#include <iterator>

using namespace std;

class Solution
{
public:
   string validIPAddress(string queryIP)
   {
      regex ipv6 = regex("((([0-9a-fA-F]){1,4})\\:){7}([0-9a-fA-F]){1,4}");

      if (regex_match(queryIP, ipv6))
      {
         return "IPv6";
      }

      regex ipv4 = regex("(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])");

      if (regex_match(queryIP, ipv4))
      {
         return "IPv4";
      }

      return "Neither";
   }
};

int main()
{
   Solution s;
   cout << s.validIPAddress("172.16.254.1") << endl;

   return 0;
}