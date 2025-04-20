import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Wallet, ArrowUpRight, ArrowDownLeft, Copy, ExternalLink, RefreshCw, Clock, CheckCircle } from "lucide-react"

export default function WalletPage() {
  // This would come from a blockchain integration in a real application
  const walletInfo = {
    address: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
    balance: {
      eth: 0.45,
      usd: 1350.75,
    },
    tokens: [
      {
        name: "Bitcoin (BTC)",
        balance: 0.015,
        value: 750.25,
        icon: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Ethereum (ETH)",
        balance: 0.45,
        value: 1350.75,
        icon: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "USDC",
        balance: 250.5,
        value: 250.5,
        icon: "/placeholder.svg?height=40&width=40",
      },
    ],
  }

  const transactions = [
    {
      id: "tx-123456",
      type: "outgoing",
      amount: 0.05,
      token: "ETH",
      value: 150.25,
      recipient: "Hospital Payment",
      date: "Apr 18, 2025",
      status: "completed",
      hash: "0xabcdef1234567890abcdef1234567890",
    },
    {
      id: "tx-123457",
      type: "incoming",
      amount: 0.1,
      token: "ETH",
      value: 300.5,
      sender: "Wallet Deposit",
      date: "Apr 15, 2025",
      status: "completed",
      hash: "0x0987654321fedcba0987654321fedcba",
    },
    {
      id: "tx-123458",
      type: "outgoing",
      amount: 50,
      token: "USDC",
      value: 50,
      recipient: "Medicine Order",
      date: "Apr 10, 2025",
      status: "completed",
      hash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
    },
  ]

  const invoices = [
    {
      id: "INV-12345",
      service: "Cardiology Appointment",
      provider: "Dr. Sarah Johnson",
      date: "Apr 18, 2025",
      amount: 0.05,
      token: "ETH",
      value: 150.25,
      status: "paid",
      txHash: "0xabcdef1234567890abcdef1234567890",
    },
    {
      id: "INV-12346",
      service: "Medicine Order",
      provider: "Central Pharmacy",
      date: "Apr 10, 2025",
      amount: 50,
      token: "USDC",
      value: 50,
      status: "paid",
      txHash: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
    },
    {
      id: "INV-12347",
      service: "Hospital Bed Reservation",
      provider: "Memorial Medical Center",
      date: "Apr 25, 2025",
      amount: 0.1,
      token: "ETH",
      value: 300.5,
      status: "pending",
      txHash: "",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Crypto Wallet</h1>
        <p className="text-muted-foreground">Manage your cryptocurrency for healthcare payments</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Wallet Balance</CardTitle>
                <CardDescription>Your current cryptocurrency balance</CardDescription>
              </div>
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Wallet Address</div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-sm font-mono truncate">{walletInfo.address}</div>
            </div>

            <div className="space-y-4">
              {walletInfo.tokens.map((token, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src={token.icon || "/placeholder.svg"}
                        alt={token.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{token.name}</div>
                      <div className="text-sm text-muted-foreground">{token.balance} tokens</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${token.value.toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Total Balance (USD)</div>
                <div className="text-2xl font-bold">${walletInfo.balance.usd.toFixed(2)}</div>
              </div>
              <div className="flex gap-2">
                <Button className="gap-1">
                  <ArrowDownLeft className="h-4 w-4" /> Deposit
                </Button>
                <Button variant="outline" className="gap-1">
                  <ArrowUpRight className="h-4 w-4" /> Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Pay</CardTitle>
            <CardDescription>Pay for healthcare services with crypto</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient</Label>
                <Input id="recipient" placeholder="Enter wallet address or scan QR" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="flex gap-2">
                  <Input id="amount" type="number" placeholder="0.00" />
                  <select className="flex h-10 w-24 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="eth">ETH</option>
                    <option value="btc">BTC</option>
                    <option value="usdc">USDC</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="memo">Memo (Optional)</Label>
                <Input id="memo" placeholder="e.g., Doctor appointment" />
              </div>
              <Button className="w-full gap-2">
                <Wallet className="h-4 w-4" /> Pay Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="invoices">Healthcare Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>View your recent cryptocurrency transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((tx) => (
                  <div key={tx.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-muted p-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          {tx.type === "outgoing" ? (
                            <ArrowUpRight className="h-4 w-4 text-red-500" />
                          ) : (
                            <ArrowDownLeft className="h-4 w-4 text-green-500" />
                          )}
                          <span className="font-medium">{tx.type === "outgoing" ? "Sent to" : "Received from"}</span>
                          <span>{tx.type === "outgoing" ? tx.recipient : tx.sender}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{tx.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">
                          {tx.type === "outgoing" ? "-" : "+"}
                          {tx.amount} {tx.token}
                        </div>
                        <div className="text-sm text-muted-foreground">${tx.value.toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={
                              tx.status === "completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            }
                          >
                            {tx.status === "completed" ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <Clock className="h-3 w-3 mr-1" />
                            )}
                            {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 gap-1">
                            <Copy className="h-3 w-3" /> Copy Hash
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 gap-1">
                            <ExternalLink className="h-3 w-3" /> View on Explorer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline">View All Transactions</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices">
          <Card>
            <CardHeader>
              <CardTitle>Healthcare Invoices</CardTitle>
              <CardDescription>View and manage your healthcare payment invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-muted p-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-medium">{invoice.service}</h4>
                        <p className="text-sm text-muted-foreground">
                          {invoice.provider} • {invoice.date}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          invoice.status === "paid"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }
                      >
                        {invoice.status === "paid" ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <Clock className="h-3 w-3 mr-1" />
                        )}
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Invoice ID</div>
                          <div className="font-medium">{invoice.id}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Amount</div>
                          <div className="font-medium">
                            {invoice.amount} {invoice.token} (${invoice.value.toFixed(2)})
                          </div>
                        </div>
                      </div>

                      {invoice.status === "paid" ? (
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">Transaction Hash</div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <Copy className="h-3 w-3" /> Copy Hash
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <ExternalLink className="h-3 w-3" /> View
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Button className="w-full gap-2">
                          <Wallet className="h-4 w-4" /> Pay Now
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline">Download All Invoices</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
