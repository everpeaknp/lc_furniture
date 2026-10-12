'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { User, MapPin, Phone, Mail, ShoppingBag, Heart, Settings, LogOut, Package, CreditCard } from 'lucide-react';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+977 9800000000',
    address: 'Main Street, Pokhara, Nepal',
  });

  const orders = [
    { id: 'ORD-001', date: '2024-01-15', status: 'Delivered', total: 'Rs. 1,25,000' },
    { id: 'ORD-002', date: '2024-02-20', status: 'Shipped', total: 'Rs. 68,000' },
    { id: 'ORD-003', date: '2024-03-10', status: 'Processing', total: 'Rs. 95,000' },
  ];

  const wishlist = [
    { id: 1, name: 'Lorenzo 3-Seater Sofa', price: 'Rs. 1,25,000', image: 'https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=200&q=80' },
    { id: 2, name: 'Oak Wardrobe', price: 'Rs. 1,25,000', image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=200&q=80' },
    { id: 3, name: 'King Size Memory Foam', price: 'Rs. 85,000', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=200&q=80' },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">My Account</h1>
          <p className="text-[#64748b]">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-[#e2dcd2]">
              <CardHeader className="text-center pb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="" alt={user.name} />
                  <AvatarFallback className="bg-[#1e3a8a] text-white text-2xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-black">{user.name}</CardTitle>
                <CardDescription className="text-[#64748b]">{user.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start gap-3 text-[#5a5952] hover:text-[#1e3a8a]">
                    <User className="h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3 text-[#5a5952] hover:text-[#1e3a8a]">
                    <MapPin className="h-4 w-4" />
                    Manage Addresses
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3 text-[#5a5952] hover:text-[#1e3a8a]">
                    <CreditCard className="h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3 text-[#5a5952] hover:text-[#1e3a8a]">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Button>
                  <Separator className="my-4" />
                  <Button variant="ghost" className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#e8e6e0]">
                <TabsTrigger value="orders" className="data-[state=active]:bg-[#faf8f2]">
                  <Package className="h-4 w-4 mr-2" />
                  Orders
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="data-[state=active]:bg-[#faf8f2]">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </TabsTrigger>
                <TabsTrigger value="personal" className="data-[state=active]:bg-[#faf8f2]">
                  <User className="h-4 w-4 mr-2" />
                  Personal Info
                </TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="mt-6">
                <Card className="border-[#e2dcd2]">
                  <CardHeader>
                    <CardTitle className="text-lg text-black">Order History</CardTitle>
                    <CardDescription className="text-[#64748b]">View and track your recent orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border border-[#e2dcd2] rounded-sm hover:bg-[#f6f4ef] transition-colors">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <ShoppingBag className="h-5 w-5 text-[#1e3a8a]" />
                              <div>
                                <p className="font-semibold text-black">{order.id}</p>
                                <p className="text-sm text-[#64748b]">{order.date}</p>
                              </div>
                            </div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-black">{order.total}</p>
                            <Button variant="link" className="text-[#1e3a8a] text-sm p-0 h-auto">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wishlist" className="mt-6">
                <Card className="border-[#e2dcd2]">
                  <CardHeader>
                    <CardTitle className="text-lg text-black">My Wishlist</CardTitle>
                    <CardDescription className="text-[#64748b]">Items you've saved for later</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {wishlist.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 border border-[#e2dcd2] rounded-sm hover:bg-[#f6f4ef] transition-colors">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-sm"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-black text-sm mb-1">{item.name}</h4>
                            <p className="text-[#1e3a8a] font-semibold mb-2">{item.price}</p>
                            <Button size="sm" className="text-xs">
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="personal" className="mt-6">
                <Card className="border-[#e2dcd2]">
                  <CardHeader>
                    <CardTitle className="text-lg text-black">Personal Information</CardTitle>
                    <CardDescription className="text-[#64748b]">Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            className="border-[#e2dcd2]"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                            <Input
                              id="email"
                              type="email"
                              value={user.email}
                              onChange={(e) => setUser({ ...user, email: e.target.value })}
                              className="border-[#e2dcd2] pl-10"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748b]" />
                          <Input
                            id="phone"
                            value={user.phone}
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            className="border-[#e2dcd2] pl-10"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-[#64748b]" />
                          <Input
                            id="address"
                            value={user.address}
                            onChange={(e) => setUser({ ...user, address: e.target.value })}
                            className="border-[#e2dcd2] pl-10"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-3 pt-4">
                        <Button variant="outline" className="border-[#e2dcd2]">
                          Cancel
                        </Button>
                        <Button className="bg-[#1e3a8a] hover:bg-[#1d4ed8]">
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
